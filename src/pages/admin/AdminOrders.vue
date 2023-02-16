<template>
    <v-container class="py-4">
        <div class="pa-12 text-center"><h1>ZAMÓWIENIA</h1></div>
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
            <admin-order-item></admin-order-item>
            <admin-order-item></admin-order-item>
            <admin-order-item></admin-order-item>
            <admin-order-item></admin-order-item>
            <admin-order-item></admin-order-item>
            <admin-order-item></admin-order-item>
        </v-list>
        <div class="pa-12"></div>
    </v-container>
</template>

<script>
import AdminOrderItem from '../../components/dedicated/admin/AdminOrderItem.vue'

export default{
    components:{
        AdminOrderItem
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
