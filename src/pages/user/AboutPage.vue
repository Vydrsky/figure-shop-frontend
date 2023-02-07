<template>
    <article class="my-0">
        <about-summary></about-summary>
        <about-section></about-section>
    </article>
</template>

<script>
import AboutSection from "../../components/page-components/about/AboutSection.vue";
import AboutSummary from "../../components/page-components/about/AboutSummary.vue";

export default {
    components: {
        AboutSection,
        AboutSummary
    }
}
</script>

<style scoped>
.v-img {
    mix-blend-mode: normal;
}
</style>
