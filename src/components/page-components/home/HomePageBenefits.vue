<template>
    <v-container>
        <v-row justify="center" class="pa-8">
            <home-benefits-card iconName="mdi-text-box-check-outline">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga atque rerum numquam corporis
                    placeat
                    minima voluptatibus voluptas accusamus iste quasi vero voluptate maiores voluptatem blanditiis
                    fugit
                    voluptatum, eius veritatis laudantium?</p>
            </home-benefits-card>
            <home-benefits-card iconName="mdi-database-plus">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga atque rerum numquam corporis
                    placeat
                    minima voluptatibus voluptas accusamus iste quasi vero voluptate maiores voluptatem blanditiis
                    fugit
                    voluptatum, eius veritatis laudantium?</p>
            </home-benefits-card>
            <home-benefits-card iconName="mdi-truck-delivery-outline">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga atque rerum numquam corporis
                    placeat
                    minima voluptatibus voluptas accusamus iste quasi vero voluptate maiores voluptatem blanditiis
                    fugit
                    voluptatum, eius veritatis laudantium?</p>
            </home-benefits-card>
        </v-row>
    </v-container>
    <home-products-carousel></home-products-carousel>
    <home-gallery></home-gallery>
    <v-container>
        <div class="line w-100 mb-12"></div>
    </v-container>
</template>

<script>
import HomeProductsCarousel from '../../dedicated/home/HomeProductsCarousel.vue'
import HomeBenefitsCard from '../../dedicated/home/HomeBenefitsCard.vue'
import HomeGallery from '../../dedicated/home/HomeGallery.vue'

export default {
    components: {
        HomeProductsCarousel,
        HomeBenefitsCard,
        HomeGallery
    }
}
</script>