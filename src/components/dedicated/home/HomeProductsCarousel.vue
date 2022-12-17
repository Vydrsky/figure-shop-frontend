<template>
    <v-col cols="12" md="8" class="bordered pa-0 pa-md-8">
        <v-carousel hide-delimiters show-arrows="hover" cycle>
            <carousel-item src="/img/pantera.jpg"></carousel-item>
            <carousel-item src="/img/kropla.jpg"></carousel-item>
            <carousel-item src="/img/bird.jpg"></carousel-item>
        </v-carousel>
    </v-col>
</template>

<script>
import CarouselItem from '../../global/CarouselItem.vue'

export default {
    components: {
        CarouselItem
    }
}
</script>