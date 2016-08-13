<template>
    <div class="counter" @click="$store.dispatch('INCREMENT')">
        {{ count }}
    </div>
</template>

<script>
    import style from './style.css'
    export default {
        computed: {
            count() {
                return this.$store.state.count
            }
        }
    }
</script>
