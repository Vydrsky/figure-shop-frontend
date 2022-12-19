<template>
    <v-row justify="center" class="bg-secondary">
        <v-col cols="12" md="8" class="pa-4">
            <v-carousel hide-delimiter-background show-arrows="hover" cycle height="650" color="text">
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