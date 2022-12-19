<template>
    <home-page-landing></home-page-landing>
    <home-page-benefits></home-page-benefits>
    <home-page-social-proof></home-page-social-proof>
</template>

<script>
import HomePageLanding from '../../components/page-components/home/HomePageLanding.vue'
import HomeSocialProofLanding from '../../components/page-components/home/HomePageSocialProof.vue'
import HomePageBenefits from '../../components/page-components/home/HomePageBenefits.vue'

export default {
    components: {
        HomePageLanding: HomePageLanding,
        HomePageSocialProof: HomeSocialProofLanding,
        HomePageBenefits: HomePageBenefits,
    }
}
</script>