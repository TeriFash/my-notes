<template>
    <main-layout>
        <div>
            <div class="search">
                <label for="inputSearch">
                    <img :src="imgSearch" alt="">
                </label>
                <input type="text"
                       id="inputSearch"
                       placeholder="Search">
            </div>
            <div class="card__container">
                <card v-for="(item, i) in cardList.cards"
                      :key="i"
                      :card="item"
                      @click="deleteCard(i)"/>
            </div>
        </div>
    </main-layout>
</template>

<script>
    import MainLayout from '@/layout/MainLayout';
    import Card from '@/components/Card';
    import cardsMain from '@/store/cards.js';
    import imgSearch from '@/assets/search.svg';

    export default {
        name: 'home',
        data() {
            return {
                imgSearch,
            };
        },
        computed: {
            cardList() {
                return this.$store.state.cards
            },
        },
        components: {
            MainLayout,
            Card,
        },
        methods: {
            deleteCard(index) {
                this.cardList.cards.splice(index, 1);
            },

        },
        created() {
            this.$store.commit('loadCards', cardsMain);
        },
    }
</script>
<style scoped>

</style>