<template>
    <v-row justify="center" class="bg-secondary border-lg pa-4 my-0 d-none d-md-flex">
        <v-col cols="12" md="12" class="pa-8 border-lg">
            <v-carousel hide-delimiter-background show-arrows="hover" cycle interval="4000" height="800" color="text" class="border">
                <carousel-item src="/img/pantera.jpg"></carousel-item>
                <carousel-item src="/img/kropla.jpg"></carousel-item>
                <carousel-item src="/img/bird.jpg"></carousel-item>
            </v-carousel>
        </v-col>
    </v-row>
</template>

<script>
import CarouselItem from '../../global/CarouselItem.vue'

export default {
    components: {
        CarouselItem
    }
}
</script>