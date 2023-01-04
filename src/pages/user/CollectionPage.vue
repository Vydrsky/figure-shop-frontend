<template>
    <section>
        <collection-filter></collection-filter>
        <collection-main></collection-main>
    </section>
</template>

<script>
import CollectionMain from '../../components/page-components/collection/CollectionMain.vue'
import CollectionFilter from '../../components/page-components/collection/CollectionFilter.vue'

export default {

    components: {
        CollectionMain,
        CollectionFilter,
    },

}
</script>