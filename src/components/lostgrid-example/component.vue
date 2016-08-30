<template>
    <div class="lostgrid">
        <transition-group name="fade" tag="section" class="row" appear>
            <div v-for="(item, index) in items"
                :key="index"
                class="half">{{ index + 1}}</div>
        </transition>
    </div>
</template>

<script>
    import style from './style.css'
    export default {
        data () {
            return {
                items: 5
            }
        }
    }
</script>
