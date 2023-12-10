# idle-scheduler

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/deuscx/idle-scheduler">
    <!-- <img src="" alt="Logo" width="80" height="80"-->
  </a>

  <h3 align="center">idle-scheduler</h3>

  <p align="center">
    A simple way to run complex tasks in a queue. use `requestIdleCallback`
  </p>
</div>

<!-- PROJECT SHIELDS -->
[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![GitHub][license-shield]][license-url]

<!-- ## Features -->

## Getting Started

<!-- ## Try it Online

link to demo or gif link-->

## Installation

```bash
pnpm install idle-scheduler
```

<!-- USAGE EXAMPLES -->
## Usage

```ts
const queue = new IdleQueue()

tasks.forEach((task) => {
  queue.add(task)
})

queue.run()
```

See the [open issues](https://github.com/deuscx/idle-scheduler/issues) for a full list of proposed features (and known issues).

you can see the [playground](./playground) example

https://github.com/Deuscx/idle-scheduler/assets/48537979/7984e261-16df-4f16-a58a-f77230f0894f

<!-- LICENSE -->
## License

Distributed under the MIT License. See [`LICENSE`](./LICENSE) for more information.

[contributors-shield]: https://img.shields.io/github/contributors/deuscx/idle-scheduler.svg?style=for-the-badge
[contributors-url]: https://github.com/deuscx/idle-scheduler/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/deuscx/idle-scheduler.svg?style=for-the-badge
[forks-url]: https://github.com/deuscx/idle-scheduler/network/members
[stars-shield]: https://img.shields.io/github/stars/deuscx/idle-scheduler.svg?style=for-the-badge
[stars-url]: https://github.com/deuscx/idle-scheduler/stargazers
[issues-shield]: https://img.shields.io/github/issues/deuscx/idle-scheduler.svg?style=for-the-badge
[issues-url]: https://github.com/deuscx/idle-scheduler/issues
[license-shield]: https://img.shields.io/github/license/deuscx/idle-scheduler?style=for-the-badge
[license-url]: https://github.com/deuscx/idle-scheduler/blob/master/LICENSE
