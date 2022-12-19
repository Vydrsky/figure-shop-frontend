<template>
    <home-page-landing></home-page-landing>
    <home-page-benefits></home-page-benefits>
    <home-page-social-proof></home-page-social-proof>
    <home-page-call-to-action></home-page-call-to-action>
</template>

<script>
import HomePageLanding from '../../components/page-components/home/HomePageLanding.vue'
import HomeSocialProofLanding from '../../components/page-components/home/HomePageSocialProof.vue'
import HomePageBenefits from '../../components/page-components/home/HomePageBenefits.vue'
import HomePageCallToAction from '../../components/page-components/home/HomePageCallToAction.vue'

export default {
    components: {
        HomePageLanding: HomePageLanding,
        HomePageSocialProof: HomeSocialProofLanding,
        HomePageBenefits: HomePageBenefits,
        HomePageCallToAction,
    }
}
</script>