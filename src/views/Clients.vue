<template lang='pug'>
div.clients
	span.title-container
		h3.is-size-4.has-text-primary-dark {{ title }}
		b-button(
			type='is-primary'
			icon-pack='fas'
			icon-left='plus'
			@click='launchModal()'
		) {{ labelButton }}
	ClientList
</template>

<script lang='js'>
import ClientList from '@/components/ClientList.vue'
import ClientForm from '@/components/ClientForm.vue'

export default {
	name: 'Clients',
	components: { ClientList },
	data(){
		return{
			title: 'Clients',
			labelButton: 'Add'
		}
	},
	computed: {
		user(){ return this.$store.state.user }
	},
	methods: {
		launchModal(){
			this.$buefy.modal.open({
				parent: this,
				component: ClientForm,
				hasModalCard: true,
				trapFocus: true
			})
		}
	},
	created(){
		if(!this.user)
			this.$router.replace({ name: 'log-in' }).catch(() => {})
	}
}
</script>
