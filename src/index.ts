export interface IdleQueueOptions {
  timeout?: number
}

if (!window.requestIdleCallback) {
  window.requestIdleCallback = (cb: any, options: any) => {
    const start = Date.now()
    return window.setTimeout(() => {
      cb({
        didTimeout: false,
        timeRemaining: () => Math.max(0, 50 - (Date.now() - start)),
      })
    }, options.timeout || 1)
  }

  window.cancelIdleCallback = (id: any) => {
    clearTimeout(id)
  }
}

export class IdleQueue {
  executingCallbacks = false
  idleId: number | null = null

  constructor(public tasks: VoidFunction[] = [], public options: IdleQueueOptions = { timeout: 2000 }) {
  }

  add(task: VoidFunction) {
    this.tasks.push(task)
  }

  run() {
    const callback = (deadline: IdleDeadline) => {
      while ((deadline.timeRemaining() > 0 || deadline.didTimeout) && this.tasks.length > 0) {
        const task = this.tasks.shift()
        if (task)
          task()
      }

      if (this.tasks.length > 0)
        this.idleId = window.requestIdleCallback(callback, this.options)
    }

    this.idleId = requestIdleCallback(callback, this.options)
  }

  clear() {
    if (this.idleId) {
      window.cancelIdleCallback(this.idleId)
      this.tasks = []
      this.idleId = null
    }
  }
}

export default IdleQueue
