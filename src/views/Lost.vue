<template>
    <div class="page">
        <lostgrid></lostgrid>
        <p>
            <br><br>
            <router-link to="/">back to home</router-link>
        </p>
    </div>
</template>

<script>
    import Lostgrid from '../components/lostgrid-example/component.vue'

    export default {
        components: {
            Lostgrid
        },
        name: 'Lost'
    }
</script>
