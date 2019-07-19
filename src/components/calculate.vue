<template>
    <div>
        <button @click="message++">+</button>
        <p>{{message}}</p>
        <button @click="sub()">-</button>
    </div>
</template>

<script>
    export default {
        name: "hello",
        data: function() {
            return {
                message: 0
            };
        },
        methods: {
            sub: function () {
               this.message--;
            }
        }

    }
</script>

<style scoped>

</style>