<template>
  <div class='client-list'>
	<span class='no-clients'
		  v-if='clients.length > 0'>
	  <b-table :data='clients'
			   :bordered='isBordered'
			   :mobile-cards='hasMobileCards'>
		<b-table-column field='name'
						label='Name'
						searchable
						v-slot='props'>
		  {{ props.row.name }}
		</b-table-column>
		<b-table-column field='phone'
						label='Phone'
						v-slot='props'>
		  {{ props.row.phone }}
		</b-table-column>
		<b-table-column field='pets'
						label='Pets'
						v-slot='props'>
		  <span v-for='(pet, index) in props.row.pets'
				:key='index'>
			<b-button title='Go Pet Profile'
					  class='button-pet'
					  type='is-primary-light'
					  @click=goPetProfile(pet._id)>
			  {{ pet.name }}, {{ pet.breed.name }}
			</b-button>
			<b-button title='Add Pet'
					  class='button-pet'
					  icon-pack='fas'
					  icon-left='plus'
					  type='is-primary-dark'
					  @click=addPet(props.row._id)
					  v-if='index == props.row.pets.length - 1'>
			</b-button>
		  </span>
		</b-table-column>
		<b-table-column field='address'
						label='Address'
						v-slot='props'>
		  {{ props.row.address.street }}
		  #{{ props.row.address.number }}
		  P.C. {{ props.row.address.postalCode }}
		</b-table-column>
	  </b-table>
	</span>

	<span class='no-clients'
		  v-if='clients.length == 0'>
	  <b-message type='is-danger'
				 icon-pack='fas'
				 icon-size='is-large'
				 icon='exclamation-circle'
				 has-icon
				 class='message'>
		<h1 class='has-text-danger'>{{ noClients }}</h1>
	  </b-message>
	</span>
  </div>
</template>

<script>
import axios from 'axios'
import { EventBus } from '../eventBus.js'
import PetForm from '@/components/PetForm.vue'

export default {
	name: 'ClientList',
	data(){
		return{
			clients: [],
			isBordered: true,
			hasMobileCards: true,
			noClients: "You don't have Clients now. Add One!"
		}
	},
	computed: {
		user(){
			return this.$store.state.user
		}
	},
	methods: {
		init(){
			this.getClients()
		},
		getClients(){
			axios.get(process.env.VUE_APP_TYRAWEB_CLIENTS, {
				headers: {
					Authorization: 'Bearer ' + this.user.token
				}
			}).then((response) => {
				this.clients = response.data
			}).catch((error) => {
				console.error(error)
			})
		},
		addPet(id){
			this.$buefy.modal.open({
				parent: this,
				component: PetForm,
				hasModalCard: true,
				trapFocus: true,
				props: {
					id: id
				}
			})
		},
		goPetProfile(id){
			this.$router.push({ name: 'pet', params: { id } })
		}
	},
	created() {
		this.init()

		/* Event Listeners */

		/* When a new Client is created, fetch from the API all the
		 * clients and render them. */
		EventBus.$on('update-clients', () => {
			this.getClients()
		})
	}
}
</script>

<style>
.button-pet {
  margin: 0 2px 0 2px;
 }

.no-clients {
  margin: 50px;
 }
</style>
