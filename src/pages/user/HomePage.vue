<template>
    <home-page-landing></home-page-landing>
    <home-page-social-proof></home-page-social-proof>
</template>

<script>
import HomePageLanding from '../../components/page-components/home/HomePageLanding.vue'
import HomeSocialProofLanding from '../../components/page-components/home/HomePageSocialProof.vue'


export default {
    components: {
        HomePageLanding: HomePageLanding,
        HomePageSocialProof: HomeSocialProofLanding,
    }
}
</script>