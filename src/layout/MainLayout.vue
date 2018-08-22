<template>
    <div>
        <header id="nav" class="header">
            <div class="nav">
                <div class="nav__link">
                    <router-link to="/">Home</router-link>
                    <router-link to="/create" class="full__btn">Create note</router-link>
                </div>
            </div>
        </header>
        <transition name="fade" appear>
            <slot></slot>
        </transition>
    </div>
</template>

<script>

    export default {
        name: "MainLayout",
        data() {
            return {
            }
        }
    }
</script>

<style lang="scss">

</style>