<template>
    <v-col cols="12" md="6" class="pa-0 pa-lg-8 ma-0 d-none d-lg-block">
        <v-sheet elevation="24" class="pa-8 border bg-secondary">
            <v-carousel hide-delimiter-background show-arrows="hover" cycle interval="4000" height="900">
                <v-carousel-item v-for="source in sources" :key="source" :src="source" cover>
                </v-carousel-item>
            </v-carousel>
        </v-sheet>
    </v-col>
</template>

<script>

export default {
    components: {
    },
    data() {
        return {
            sources: [
                '/img/pantera.jpg',
                '/img/kropla.jpg',
                '/img/bird.jpg'
            ]
        }
    }
}
</script>