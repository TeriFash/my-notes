<template>
    <div>
    <form class="new__card">
        <div class="new__card__body ">
            <div class="input-main">
            <input type="text"
                   placeholder="Send title"
                   v-model="modelTitle">


            <textarea rows="10"
                      name="text"
                      placeholder="Send text"
                      v-model="modelText"
            >

            </textarea>
            <button type="button"

                    @click="addStorage">
                Sent Storage
            </button>
            </div>
        </div>


    </form>

    <div class="new__card__footer">
        {{ timeSet }}
    </div>
    </div>
</template>

<script>
    export default {
        name: 'NewCard',
        data() {
            return {
                modelText: '',
                modelTitle: '',
            }
        },
        props: {
        },
        computed: {
            timeSet() {
                const y = new Date().getFullYear();
                const m = new Date().getMonth();
                const d = new Date().getDate();
                const h = new Date().getHours();
                const min = new Date().getMinutes();
                return `${d}-${m}-${y} ${h}:${min}`
            },
        },
        methods: {
            addStorage() {
                if (this.modelTitle.length && this.modelText.length !== 0){
                    localStorage.setItem(this.modelTitle, this.modelText);
                    alert(`Добавлено: ${this.modelTitle}`);
                    setTimeout(() => {
                        this.modelTitle = '';
                        this.modelText = '';
                    }, 1000);
                } else {
                    alert('Форма не заполнена, заполните заголовок и описание');
                }

            },

        },

    }
</script>

<style>

</style>
