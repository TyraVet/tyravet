<template>
  <div class='clients'>
	<span class='title-container'>
	  <h3 class='is-size-4 has-text-primary-dark'>{{ title }}</h3>
	  <b-button type='is-primary'
				icon-pack='fas'
				icon-left='plus'
				@click=launchModal()>
		{{ labelButton }}
	  </b-button>
	</span>
	<ClientList></ClientList>
  </div>
</template>

<script>
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
	methods: {
		launchModal(){
			this.$buefy.modal.open({
				parent: this,
				component: ClientForm,
				hasModalCard: true,
				trapFocus: true
			})
		}
	}
}
</script>
