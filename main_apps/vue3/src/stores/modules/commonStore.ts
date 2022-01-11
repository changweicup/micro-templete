import { defineStore } from 'pinia'

export type CommonState = {
  isCollapse: boolean;
};

export const useCommonStore = defineStore({
  id: 'app-common',
  state: (): CommonState => ({
    isCollapse: false
  }),
  getters: {},
  actions: {
    setCollapse (collapse: boolean) {
      this.isCollapse = collapse
    }
  }
})
