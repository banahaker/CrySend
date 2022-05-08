<script lang="ts" setup>
import { useRoute } from "vue-router";
import transferToolVue from "../components/transfer-tool.vue";

const route = useRoute();
const id = route.params.id;
const address = id.toString();
</script>

<template>
  <transfer-tool-vue :address-to="address"></transfer-tool-vue>
</template>
