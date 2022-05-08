<script lang="ts" setup>
import { NConfigProvider, darkTheme, NDialogProvider } from "naive-ui";
</script>

<template>
  <n-config-provider :theme="darkTheme">
    <n-dialog-provider>
      <router-view></router-view>
    </n-dialog-provider>
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
