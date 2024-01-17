import {defineStore} from "pinia";

const useStoreStackData = defineStore("STORE_STACK_DATA", {
  state: () => {
    return {};
  },
  actions: {
    changeStacks(key: string, data: any) {
      this[key] = data;
    },
  },
});
export default useStoreStackData;
