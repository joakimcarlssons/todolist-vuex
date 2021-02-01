<template>
    <li
    v-on:click="markAsDone"
    v-if="item"
    >
    <button @click="remove(item)">X</button>
    <input type="checkbox" v-model="item.done" :checked="item.done">
    <input type="text" v-model="item.content">
    </li>
</template>

<script>
export default {
    props: {
        item : Object,
    },
    methods: {
        remove(item) {
            this.$store.commit('removeItem', item)
        }
    }
}
</script>

<style scoped>
</style>