<template>
    <app-404 text="Route not found!"></app-404>
</template>

<script>
  import server from '@/server';
  import App404 from '@/components/E404';

  export default {
    components: {
        App404,
    }
  }
</script>
