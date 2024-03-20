<template>
  <div class="hello">
   
  </div>
  <div>
    <p>loading: {{ msg }}</p>
    <p>loading: {{ loading }}</p>
    <p>Data: {{ data }}</p>
    <p>error: {{ error }}</p>
    <button @click="checkUser">Find</button>
  </div>
</template>

<script setup>
  import { usePromotionsStore } from '@/stores';
  import { computed } from 'vue';

  const promotionsStore = usePromotionsStore();

  const loading = computed(() => promotionsStore.loading);
  const data = computed(() => promotionsStore.data);
  const error = computed(() => promotionsStore.error);


  //const checkUser = () => {
   // console.log('hello');
   // promotionsStore.fetchData();
  //};

  const checkUser = async () => {
  try {
    await promotionsStore.fetchData();
    // Optionally, handle the fetched data here
  } catch (error) {
    // Handle errors
  }
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
</style>
