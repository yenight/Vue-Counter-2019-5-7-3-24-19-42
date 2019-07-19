<template>
    <div>
        <button @click="add()">+</button>
        <span >{{message}}</span>
        <button @click="sub()">-</button>
    </div>
</template>

<script>
    export default {
        name: "Counter",
        data: function() {
            return {
                message: 0,
            };
        },
        beforeDestroy: function () {
            this.$emit('getCounterNumber', this.message * -1);
        },
        methods: {
            sub: function () {
               this.message--;
               this.$emit('getCounterNumber', -1)
            },
            add: function () {
                this.message++;
                this.$emit('getCounterNumber', +1)
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