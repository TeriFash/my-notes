<template>
    <main-layout>
        <div>
            <div class="search">
                <label for="inputSearch">
                    <img :src="imgSearch" alt="">
                </label>
                <input type="text"
                       id="inputSearch"
                       placeholder="Search"
                v-model="search">
            </div>
            <div class="card__container">
                <card v-for="(item, i) in filteredCard"
                      :key="i"
                      :card="item"
                      @click="deleteCard(i)"/>
            </div>
        </div>
    </main-layout>
</template>

<script>
    import {mapGetters} from 'Vuex';
    import MainLayout from '@/layout/MainLayout';
    import Card from '@/components/Card';
    import cardsMain from '@/store/cards.js';
    import imgSearch from '@/assets/search.svg';

    export default {
        name: 'home',
        data() {
            return {
                imgSearch,
                search: '',
            };
        },
        computed: {
            ...mapGetters({
                cards: 'getCards',
            }),
            // cardList() {
            //     //console.log('-----', this.$store.getters.getCards);
            //     return this.$store.getters.getCards
            // },
            filteredCard() {
                return this.cards.cards.filter(item => {
                    return item.title.toLowerCase().includes(this.search.toLowerCase())
                })
            }
        },
        components: {
            MainLayout,
            Card,
        },
        methods: {
            deleteCard(index) {
                this.cards.cards.splice(index, 1);
            },
        },
        created() {
            this.$store.dispatch('loadCards', cardsMain);
        },
    }
</script>
<style scoped>

</style>