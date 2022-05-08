<script lang="ts" setup>
import { reactive, ref } from "vue";
import { useDialog } from "naive-ui";
import {
  NCard,
  NSelect,
  NInput,
  NInputNumber,
  NButton,
  NInputGroup,
} from "naive-ui";
import { connectWallet, getAddress } from "../walletApi";

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
const DG = useDialog();
const isConnected = ref<boolean>(false);
const walletAddress = ref("");
const Selected = ref("");
const TargetAddress = props.addressTo;
const Value = ref(0);
function connect() {
  connectWallet()
    .then((_) => {
      getAddress()
        .then((res) => {
          walletAddress.value = res;
          isConnected.value = true;
        })
        .catch((err) => {
          DG.error({
            title: "Error",
            content: err.message,
            positiveText: "OK!",
          });
        });
    })
    .catch((err) => {
      DG.error({
        title: "Error",
        content: err.message,
        positiveText: "OK!",
      });
    });
}
</script>

<template>
  <n-card class="transferTool">
    <h1>CRY<span>SEND</span></h1>
    <n-input
      v-model:value="TargetAddress"
      type="text"
      placeholder="Target Address"
      class="input"
    />
    <n-select
      class="input"
      v-model:value="Selected"
      :options="options"
    ></n-select>
    <n-input-number class="input" v-model:value="Value" placeholder="Value" />
    <div class="wallet">
      <n-input-group v-if="isConnected">
        <n-button>Transfer</n-button>
        <n-input disabled v-model:value="walletAddress"></n-input>
      </n-input-group>
      <n-button v-else @click="connect">Connect to wallet</n-button>
    </div>
  </n-card>
</template>

<style lang="scss">
.transferTool {
  padding: 10px 15px;
  width: 600px;
  max-width: 85vw;
  max-width: 90vw;

  .input {
    margin-bottom: 15px;
  }

  h1 {
    font-size: 1.5rem;
    color: #2359ec;
    margin-bottom: 10px;
    span {
      color: #ffffff;
    }
  }
  .wallet {
    p {
      color: #2359ec;
      font-size: 1rem;
    }
  }
}
</style>
