<template>
    <home-page-landing></home-page-landing>
    <home-page-social-proof></home-page-social-proof>
    <home-benefits></home-benefits>
</template>

<script>
import HomePageLanding from '../../components/page-components/home/HomePageLanding.vue'
import HomeSocialProofLanding from '../../components/page-components/home/HomePageSocialProof.vue'
import HomeBenefits from '../../components/page-components/home/HomeBenefits.vue'

export default {
    components: {
        HomePageLanding: HomePageLanding,
        HomePageSocialProof: HomeSocialProofLanding,
        HomeBenefits: HomeBenefits,
    }
}
</script>