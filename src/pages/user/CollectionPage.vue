<template>
    <the-header></the-header>
    <collection-filter></collection-filter>
    <collection-main></collection-main>
</template>

<script>
import TheHeader from '../../components/global/TheHeader.vue'
import CollectionMain from '../../components/page-components/collection/CollectionMain.vue'
import CollectionFilter from '../../components/page-components/collection/CollectionFilter.vue'

export default {

    components: {
        TheHeader,
        CollectionMain,
        CollectionFilter,
    },

}
</script>