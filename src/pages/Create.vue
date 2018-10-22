<template>
  <main-layout>
    <new-card />
  </main-layout>
</template>
<script>
    import MainLayout from '@/layout/MainLayout';
    import NewCard from '@/components/NewCard';

    export default {
        name: 'Create',
        components: {
            MainLayout,
            NewCard,
        }
    }

</script>
<style scoped lang="scss">

</style>
