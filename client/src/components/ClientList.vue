<template lang='pug'>
div.client-list
	span(
		v-if='clients.length > 0'
	)
		b-table(
			:data='clients'
			:bordered='isBordered'
			:mobile-cards='hasMobileCards'
		)
			b-table-column(
				field='name'
				label='Name'
				searchable
				v-slot='props'
			) {{ props.row.name }}
			b-table-column(
				field='phone'
				label='Phone'
				v-slot='props'
			) {{ props.row.phone }}
			b-table-column(
				field='pets'
				label='Pets'
				v-slot='props'
				:key='petsKey'
			)
				span(
					v-for='(pet, index) in props.row.pets'
					:key='index'
				)
					b-button.button-pet(
						title='Go Pet Profile'
						type='is-primary-light'
						@click='goPetProfile(pet._id)'
					) {{ pet.name }}, {{ pet.breed.name }}
					b-button.button-pet(
						title='Add Pet'
						icon-pack='fas'
						icon-left='plus'
						type='is-primary-dark'
						@click='addPet(props.row._id)'
						v-if='index == props.row.pets.length - 1'
					)
			b-table-column(
				field='address'
				label='Address'
				v-slot='props'
			)
				| {{ props.row.address.street }}
				| {{ props.row.address.number }}
				| P.C. {{ props.row.address.postalCode }}
	ErrorMessage( v-if='noClients' :message='errorMessage' )
</template>

<script lang='js'>
import axios from 'axios'
import { EventBus } from '../eventBus.js'
import PetForm from '@/components/PetForm.vue'
import ErrorMessage from '@/components/ErrorMessage.vue'

export default {
	name: 'ClientList',
	components: { ErrorMessage },
	data(){
		return{
			clients: [],
			isBordered: true,
			hasMobileCards: true,
			errorMessage: "You don't have Clients now. Add One!",
			noClients: true,
			petsKey: 0
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
		/* We need to tell Vue to update the pets column, the proper way
		 * of doing this is to set a key in the component and update
		 * that key value. */
		forceRenderer(){
			this.petsKey++
		},
		/* Once we have the clients we need to populate the pets
		 * of each client. */
		setOnSuccess(res){
			this.noClients = false
			this.clients = res.data

			this.clients.forEach((client, clientIndex) => {
				client.pets.forEach((pet, petIndex) => {
					axios.get(process.env.VUE_APP_TYRAWEB_PET, {
						params: {
							id: pet
						},
						headers: {
							Authorization: 'Bearer ' + this.user.token
						}
					}).then(response => {
						client.pets[petIndex] = response.data
						this.forceRenderer()
					}).catch(error => {
						console.error(error)
					})
				})
			})
		},
		getClients(){
			axios.get(process.env.VUE_APP_TYRAWEB_CLIENTS, {
				headers: {
					Authorization: 'Bearer ' + this.user.token
				}
			}).then((response) => {
				this.setOnSuccess(response)
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
