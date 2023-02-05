<template>
    <article class="my-0">
        <div class="pa-12 bg-secondary"></div>
        <about-section></about-section>
    </article>
</template>

<script>
import AboutSection from "../../components/dedicated/about/AboutSection.vue";

export default {
    components: {
        AboutSection,
    }
}
</script>

<style scoped>
.v-img {
    mix-blend-mode: normal;
}
</style>
