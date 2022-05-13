<script lang="ts" setup>
import { reactive, ref, toRef } from "vue";
import { useDialog } from "naive-ui";
import {
  NCard,
  NSelect,
  NInput,
  NInputNumber,
  NButton,
  NInputGroup,
} from "naive-ui";
import { connectWallet, getAddress, sendETH, sendCDR } from "../walletApi";

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
const TargetAddress = ref("");
if (props.addressTo !== undefined) {
  TargetAddress.value = props.addressTo;
}
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
function send() {
  if (
    Selected.value === "" ||
    TargetAddress === undefined ||
    TargetAddress.value === "" ||
    Value.value === 0
  ) {
    DG.error({
      title: "Error",
      content: "Please type the transaction information",
      positiveText: "OK!",
    });
    return false;
  }
  if (Selected.value === "eth") {
    sendETH(Value.value, TargetAddress.value)
      .then((data) => {
        DG.success({
          title: "Error",
          content: "Please type the transaction information",
          positiveText: "OK!",
        });
      })
      .catch((err) => {
        DG.error({
          title: "Error",
          content: err.message,
          positiveText: "OK!",
        });
      });
  } else if (Selected.value == "cdr") {
    sendCDR(Value.value, TargetAddress.value)
      .then((data) => {
        DG.success({
          title: "Error",
          content: "Please type the transaction information",
          positiveText: "OK!",
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
        <n-button @click="send">Transfer</n-button>
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
    color: #89dba3;
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
