<template>
    <div>
        Sum: {{countSum}}
    </div>
</template>

<script>
    export default {
        name: "CounterSum",
        props: {
            countSum: Number
        }
    }
</script>

<style scoped>

</style>