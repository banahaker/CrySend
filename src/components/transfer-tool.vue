<script lang="ts" setup>
import { reactive, ref, defineProps } from "vue";

defineProps<{
  addressTo?: string;
}>();

interface coinType {
  type: string;
  function: Function;
}

const CoinType = reactive<Array<coinType>>([
  {
    type: "ETH",
    function: () => {},
  },
  {
    type: "CDR",
    function: () => {},
  },
]);

const Selected = ref("");
</script>

<template>
  <div class="transferTool">
    <h1>CRY<span>SEND</span></h1>
    <select v-model="Selected" name="cointype" id="cointype">
      <option v-for="i in CoinType" :value="i.type">{{ i.type }}</option>
    </select>
  </div>
</template>

<style lang="scss">
.transferTool {
  padding: 10px 15px;
  background-color: #ffffff;
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
      color: #353535;
    }
  }

  select {
    width: 100%;
    background-color: #1f1f1f;
    border: 1px solid transparent;
    color: #ffffff;
    border-radius: 5px;
    padding: 3px 10px;
    font-size: 1rem;
    transition: border 0.2s ease-in-out;

    &:focus {
      border: 1px solid #2359ec;
    }
  }
}
</style>
