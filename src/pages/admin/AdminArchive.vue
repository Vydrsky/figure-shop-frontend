<template>
    <v-container class="py-4">
        <div class="pa-12 text-center"><h1>ARCHIWUM</h1></div>
        <div class="my-4">
            <p>Zamknięte zamówienia zostaną automatycznie usunięte w przypadku gdy są starsze niż X dni.</p>
        </div>
        <div>
            <p class="py-2">Sortowanie:</p>
            <div class="d-flex justify-start">
                <v-chip text="Od najnowszych"></v-chip>
                <v-chip text="Od najstarszych"></v-chip>
                <v-chip text="Alfabetycznie"></v-chip>
            </div>
        </div>
        <div class="pa-12"></div>
        <v-list class="bg-primary orders">
            <admin-archive-item></admin-archive-item>
            <admin-archive-item></admin-archive-item>
            <admin-archive-item></admin-archive-item>
            <admin-archive-item></admin-archive-item>
            <admin-archive-item></admin-archive-item>
            <admin-archive-item></admin-archive-item>
            <admin-archive-item></admin-archive-item>
            <admin-archive-item></admin-archive-item>
            <admin-archive-item></admin-archive-item>
            <admin-archive-item></admin-archive-item>
            <admin-archive-item></admin-archive-item>
            <admin-archive-item></admin-archive-item>
            <admin-archive-item></admin-archive-item>
        </v-list>
        <div class="pa-12"></div>
    </v-container>
</template>

<script>
import AdminArchiveItem from '../../components/dedicated/admin/AdminArchiveItem.vue'

export default{
    components:{
        AdminArchiveItem
    }
}
</script>

<style scoped>
.orders{
    min-height: 75vh;
}

.v-chip{
    margin-right: 1rem;
}
</style>