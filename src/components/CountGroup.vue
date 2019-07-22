<template>
    <div>
        <Counter v-for="n in counterNum" :key="n"></Counter>
    </div>
</template>

<script>
    import Counter from '@/components/Counter';
    export default {
        name: "CountGroup",
        props: {
            counterNum: Number
        },
        components: {
            Counter
        },
        data: function () {
            return {
            }
        },
        watch: {
            counterNum: function (value) {
                if (value === 0) {
                    this.$store.commit('resetSum')
                }
            }
        },
        methods: {
        }
    }
</script>

<style scoped>

</style>