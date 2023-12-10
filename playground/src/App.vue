<script setup lang="ts">
import { ref, onMounted } from 'vue'
import  IdleQueue from '../../src/index'
const logContainer = ref<HTMLElement | null>(null);

const sum = 1000 * 10
let num = ref(0)
function log(text: string) {
  const el = document.createElement("div");
  el.textContent = text;
  logContainer.value!.appendChild(el);
}

function createTasks() {
  const tasks = [];
  for (let i = 0; i < sum; i++) {
    tasks.push(() => {
      log(`task ${i} run`)
      num.value = i
    });
  }
  return tasks;
}

function simpleRunTasks() {
  const tasks = createTasks();
  for (const task of tasks) {
    task();
  }

}

function idleRunTasks() {
  const tasks = createTasks();
  const idleQueue =  new IdleQueue()
  tasks.forEach(task=>{
    idleQueue.add(task)
  })
  idleQueue.run()
}

</script>

<template>
  <!-- gif image -->
  <img src="/public/hit.webp">
  <progress :value="num" :max="sum" ></progress>{{ num / (sum-1) }}
  <button @click="simpleRunTasks">Simple runTasks</button>
  <button @click="idleRunTasks">Idle runTasks</button>
  Log:
  <div ref="logContainer" style="height: 100vh;">
  </div>
</template>


