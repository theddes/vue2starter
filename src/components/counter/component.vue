<template>
    <div>
        <transition name="pop" appear>
            <div :class="`counter ${maxed}`" @click="$store.dispatch('INCREMENT')">
                <span v-if="showCounter">{{ count }}</span>
            </div>
        </transition>
        <button @click="$store.dispatch('DECREMENT')">- Decrement -</button><br><br>
    </div>
</template>

<script>
    import style from './style.css'
    export default {
        computed: {
            count () {
                return this.$store.state.count
            },
            maxed () {
                return (this.count >= 10) ? 'maxed' : ''
            }
        },
        data () {
            return {
                showCounter: true
            }
        }
    }
</script>
