# i-queue

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/deuscx/i-queue">
    <!-- <img src="" alt="Logo" width="80" height="80"-->
  </a>

  <h3 align="center">i-queue</h3>

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
pnpm install i-queue
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

See the [open issues](https://github.com/deuscx/i-queue/issues) for a full list of proposed features (and known issues).

<!-- LICENSE -->
## License

Distributed under the MIT License. See [`LICENSE`](./LICENSE) for more information.

[contributors-shield]: https://img.shields.io/github/contributors/deuscx/i-queue.svg?style=for-the-badge
[contributors-url]: https://github.com/deuscx/i-queue/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/deuscx/i-queue.svg?style=for-the-badge
[forks-url]: https://github.com/deuscx/i-queue/network/members
[stars-shield]: https://img.shields.io/github/stars/deuscx/i-queue.svg?style=for-the-badge
[stars-url]: https://github.com/deuscx/i-queue/stargazers
[issues-shield]: https://img.shields.io/github/issues/deuscx/i-queue.svg?style=for-the-badge
[issues-url]: https://github.com/deuscx/i-queue/issues
[license-shield]: https://img.shields.io/github/license/deuscx/i-queue?style=for-the-badge
[license-url]: https://github.com/deuscx/i-queue/blob/master/LICENSE
