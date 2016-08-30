<template>
    <div class="counter" @click="$store.dispatch('INCREMENT')">
        <transition name="fade" appear>
            <span v-if="showCounter">{{ count }}</span>
        </transition>
    </div>
</template>

<script>
    import style from './style.css'
    export default {
        computed: {
            count() {
                return this.$store.state.count
            }
        },
        data () {
            return {
                showCounter: true
            }
        },
        created () {
        }
    }
</script>
