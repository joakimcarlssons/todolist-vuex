<template>
<div class="wrapper">
    <button class="btn" @click="addItem">New todo...</button>
    <ul>
    <TodoItem
    v-for="(item, index) of items"
    :key="index"
    :item="item"
    />
    </ul>
</div>
</template>

<script>
import TodoItem from './TodoItem'

export default {
    components: {
        TodoItem
    },

    computed: {
        items() {
            return this.$store.getters.allItems
        }
    },

    methods: {
        addItem() {
            this.$store.commit('addItem', {
                content: "",
                done : false
            })
        }
    }

}
</script>

<style>

.wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;

    font-family: Arial, Helvetica, sans-serif;
    margin: 10rem;
}
ul {
    width: 100%;
    margin: 0;
    padding: 0;
    align-self: flex-start;
    list-style-type: none;
}

li {
    
    padding: .7rem;
    background-color: lightgray;
    color: #474646;
    font-weight: 600;
    margin: .2rem 0;
}

.btn {
    width: 100%;
    border: none;
    background-color: darkgrey;
    color: white;
    padding: 1rem;
    font-weight: 700;
    font-size: 1.3rem;
}

.green {
    background-color: lightgreen;
    color: darkgreen;
}

</style>