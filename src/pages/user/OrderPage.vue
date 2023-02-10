<template>
    <section>
        <order-summary></order-summary>
        <order-form></order-form>
    </section>
</template>

<script>
import OrderSummary from '../../components/page-components/order/OrderSummary.vue'
import OrderForm from '../../components/page-components/order/OrderForm.vue'

export default {
    components: {
        OrderSummary,
        OrderForm
    }
}
</script>