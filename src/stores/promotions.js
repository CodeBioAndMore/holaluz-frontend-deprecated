//import { createPinia } from 'pinia';
import { defineStore } from 'pinia';

//export const pinia = createPinia();

export const usePromotionsStore = defineStore('promotions', {
  state: () => ({
    data: null,
    loading: false,
    error: null,
  }),
  actions: {
    async fetchData() {
      try {
        this.loading = true;
        const response = await fetch('http://localhost:3000/promotions/123456');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();

        this.data = data;
      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
  },
});