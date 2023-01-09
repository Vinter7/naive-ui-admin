<script setup>
import { NTable } from 'naive-ui'
</script>

<template>
  <n-table>
    <thead>
      <tr>
        <th>Framework</th>
        <th>Stars</th>
        <th>Rising Stars in 2022</th>
        <th>Weekly Download</th>
        <th>Description</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Vue</td>
        <td>34.6k</td>
        <td>+7.9k</td>
        <td>3,033k</td>
        <td>
          Vue.js is a progressive, incrementally-adoptable JavaScript
          framework for building UI on the web.
        </td>
      </tr>
      <tr>
        <td>React</td>
        <td>200.2k</td>
        <td>+19.8k</td>
        <td>14,516k</td>
        <td>
          A declarative, efficient, and flexible JavaScript library
          for building user interfaces.
        </td>
      </tr>
      <tr>
        <td>Qwik</td>
        <td>14.3k</td>
        <td>+12.8k</td>
        <td>6k</td>
        <td>
          The HTML-first framework. Instant apps of any size with ~
          1kb JS
        </td>
      </tr>
      <tr>
        <td>Solid</td>
        <td>24.6k</td>
        <td>+11.1k</td>
        <td>47k</td>
        <td>
          A declarative, efficient, and flexible JavaScript library
          for building user interfaces.
        </td>
      </tr>
      <tr>
        <td>Svelte</td>
        <td>64.6k</td>
        <td>+10.0k</td>
        <td>394k</td>
        <td>Cybernetically enhanced web apps</td>
      </tr>
      <tr>
        <td>Next</td>
        <td>98.8k</td>
        <td>+19.4k</td>
        <td>2,927k</td>
        <td>The React Framework</td>
      </tr>
      <tr>
        <td>Vite</td>
        <td>51.3k</td>
        <td>+15.5k</td>
        <td>2,278k</td>
        <td>Next generation frontend tooling. It's fast!</td>
      </tr>
      <tr>
        <td>Nuxt</td>
        <td>11.1k</td>
        <td>+7.0k</td>
        <td>406k</td>
        <td>The Intuitive Web Framework, based on Vue 3.</td>
      </tr>
    </tbody>
  </n-table>
</template>
