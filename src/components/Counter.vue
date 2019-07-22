<template>
    <div>
        <button @click="add()">+</button>
        <span >{{result}}</span>
        <button @click="sub()">-</button>
    </div>
</template>

<script>
    export default {
        name: "Counter",
        data: function() {
            return {
                result: 0
            };
        },
        destroy: function () {
            this.$store.commit('calculateSum', {number: (this.result * -1)});
        },
        methods: {
            sub: function () {
                this.result--;
                this.$store.commit('calculateSum', {number: -1})
            },
            add: function () {
                this.result++;
                this.$store.commit('calculateSum', {number: 1})
            }
        }

    }
</script>

<style scoped>
span {
    margin-left: 20px;
    margin-right: 20px;
}
</style>