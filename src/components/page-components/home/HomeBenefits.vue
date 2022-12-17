<template>
    <v-row justify="center" class="bg-secondary mt-10">
        <home-products-carousel></home-products-carousel>
    </v-row>
    <v-container>
        <v-row justify="center">
            <v-col cols="2">
                <v-icon class="w-100">mdi-account</v-icon>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga atque rerum numquam corporis placeat
                    minima voluptatibus voluptas accusamus iste quasi vero voluptate maiores voluptatem blanditiis fugit
                    voluptatum, eius veritatis laudantium?
                </div>
            </v-col>
            <v-col cols="2">
                <v-icon class="w-100">mdi-account</v-icon>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga atque rerum numquam corporis placeat
                    minima voluptatibus voluptas accusamus iste quasi vero voluptate maiores voluptatem blanditiis fugit
                    voluptatum, eius veritatis laudantium?
                </div>
            </v-col>
            <v-col cols="2">
                <v-icon class="w-100">mdi-account</v-icon>
                <div>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga atque rerum numquam corporis placeat
                    minima voluptatibus voluptas accusamus iste quasi vero voluptate maiores voluptatem blanditiis fugit
                    voluptatum, eius veritatis laudantium?
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import HomeProductsCarousel from '../../dedicated/home/HomeProductsCarousel.vue'

export default {
    components: {
        HomeProductsCarousel
    }
}
</script>