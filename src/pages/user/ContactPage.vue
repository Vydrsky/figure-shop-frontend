<template>
    <article>
        <contact-info></contact-info>
        <contact-form></contact-form>
    </article>
</template>

<script>
import ContactInfo from '../../components/page-components/contact/ContactInfo.vue'
import ContactForm from '../../components/page-components/contact/ContactForm.vue'

export default {
    components: {
        ContactInfo,
        ContactForm
    }
}
</script>

