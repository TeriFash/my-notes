<template>
    <div class="card">
        <div class="card__delete_btn"
             @click="$emit('click', $event)">
            <i class="fa fa-times"></i>
        </div>
        <div class="card__title">{{card.title}}</div>
        <div class="card__body">{{card.text}}</div>
        <div class="card__footer">{{card.data}}</div>
    </div>
</template>

<script>
    export default {
        name: 'Card',
        props: {
            card: {

            },
        },
        methods: {
        },

    }
</script>

<style>

</style>
