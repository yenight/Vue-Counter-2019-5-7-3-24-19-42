<template>
    <div>
        <Counter v-for="n in counterNum" ref="test" @getCounterNumber="getCounterNumber"></Counter>
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
                sum: 0,
            }
        },
        watch: {
            counterNum: function (value) {
                if (value === 0) {
                    this.sum = 0
                }
            }
        },
        methods: {
            getCounterNumber: function (value) {
                this.sum = this.sum + parseInt(value)
                this.$emit('getCountSum', this.sum)
            }
        }
    }
</script>

<style scoped>

</style>