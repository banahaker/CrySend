<script lang="ts" setup>
import { reactive, ref } from "vue";
import { NCard, NSelect, NInput, NInputNumber, NButton } from "naive-ui";

const props = defineProps<{
  addressTo?: string;
}>();

const options = reactive([
  {
    label: "ETH",
    value: "eth",
  },
  {
    label: "CDR",
    value: "cdr",
  },
]);

const isConnect = false;
const walletAddress = ref("");

const Selected = ref("");
const TargetAddress = props.addressTo;
const Value = ref(0);
</script>

<template>
  <n-card class="transferTool">
    <h1>CRY<span>SEND</span></h1>
    <n-input
      v-model:value="TargetAddress"
      type="text"
      placeholder="Target Address"
    />
    <n-select v-model:value="Selected" :options="options"></n-select>
    <n-input-number v-model:value="Value" placeholder="Value" />
    <div class="wallet">
      <p v-if="isConnect">{{ walletAddress }}</p>
      <n-button v-else></n-button>
    </div>
  </n-card>
</template>

<style lang="scss">
.transferTool {
  padding: 10px 15px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  max-width: 90vw;

  h1 {
    font-size: 1.5rem;
    color: #2359ec;
    margin-bottom: 10px;
    span {
      color: #ffffff;
    }
  }
}
</style>
