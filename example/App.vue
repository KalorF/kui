<script lang="ts" setup>
import { ref } from 'vue'

const msg = ref('hello Kui library!!!')
</script>

<template>
  <div>
    <h1>{{ msg }}</h1>
    <div style="display: flex; gap: 8px">
      <k-button @click="msg = 'Hello Kbutton primary'">点击</k-button>
      <k-button type="secondary" @click="msg = 'Hello Kbutton secondary'">点击</k-button>
      <k-button type="danger" @click="msg = 'Hello Kbutton danger'">点击</k-button>
      <k-button type="warning" @click="msg = 'Hello Kbutton warning'">点击</k-button>
      <k-button type="success" @click="msg = 'Hello Kbutton success'">点击</k-button>
      <k-button type="info" @click="msg = 'Hello Kbutton info'">点击</k-button>
    </div>
  </div>
</template>
