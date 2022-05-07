<script lang="ts" setup>
import { NConfigProvider, darkTheme } from "naive-ui";
</script>

<template>
  <n-config-provider :theme="darkTheme">
    <router-view></router-view>
  </n-config-provider>
</template>

<style lang="scss">
#app {
  width: 100vw;
  height: 100vh;
  background-color: #242323;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
