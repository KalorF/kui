<script lang="ts" setup>
import { ref } from 'vue'

const msg = ref('hello Kui library!!!')
</script>

<template>
  <div>
    <h1>{{ msg }}</h1>
    <k-button @click="msg = 'Hello Kbutton'">点击</k-button>
  </div>
</template>
