<template>
    <div class="page">
        <counter></counter>
        <p>
            <router-link to="/lostgrid">Lostgrid sample</router-link>
        </p>
    </div>
</template>

<script>
    import Counter from '../components/counter/component.vue'

    export default {
        components: {
            Counter
        },
        name: 'Home'
    }
</script>
