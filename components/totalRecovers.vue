<template>
    <a-col :span="8">
        <a-card title="total recovers" :bordered="true">
            <p>{{totalCases}}</p>
        </a-card>
    </a-col>
</template>

<script>
    export default {
        data() {
            return {
                totalCases: this.$store.state.totalRecovered,
            }
        },
    }
</script>

<style>

</style>