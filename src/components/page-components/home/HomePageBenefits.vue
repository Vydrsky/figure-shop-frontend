<template>
    <div class="vertical-bordered">
        <v-container>
            <v-row justify="center" class="pa-4 pa-lg-12">
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
    </div>
    <div class="bg-secondary">
        <v-container>
            <v-row align="center">
                <home-products-carousel></home-products-carousel>
                <home-gallery></home-gallery>
            </v-row>
        </v-container>
    </div>
    <line-spacer></line-spacer>
</template>

<script>
import HomeProductsCarousel from '../../dedicated/home/HomeProductsCarousel.vue'
import HomeBenefitsCard from '../../dedicated/home/HomeBenefitsCard.vue'
import HomeGallery from '../../dedicated/home/HomeGallery.vue'
import LineSpacer from '../../global/LineSpacer.vue'

export default {
    components: {
        HomeProductsCarousel,
        HomeBenefitsCard,
        HomeGallery,
        LineSpacer
    }
}
</script>