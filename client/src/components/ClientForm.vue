<template>
  <form id='client-form'>
	<div class='modal-card' style='width: auto'>
	  <header class='modal-card-head'>
		<p class='modal-card-title'>{{ title }}</p>
		<button type='button'
				class='delete'
				@click=close() />
	  </header>
	  <section class='modal-card-body'>
		   <b-field label='Name'>
			 <b-input type='text'
					  v-model='clientName'
					  required>
			 </b-input>
		   </b-field>
		   <b-field label='Address'
					grouped
					group-multiline
					position='is-centered'
					class='flex-vertical'>
			 <b-field label='Street'>
			   <b-input type='text'
						v-model='clientAddressStreet'
						required></b-input>
			 </b-field>
			 <b-field label='Number'>
			   <b-input type='tel'
						v-model='clientAddressNumber'
						min='0'
						maxlength='4'
						required></b-input>
			 </b-field>
			 <b-field label='Int Number'>
			   <b-input type='tel'
						v-model='clientAddressIntNumber'
						min='0'
						maxlength='4'></b-input>
			 </b-field>
			 <b-field label='Postal Code'>
			   <b-input type='tel'
						v-model='clientAddressPostalCode'
						min='0'
						maxlength='5'
						required></b-input>
			 </b-field>
		   </b-field>
		   <b-field label='Phone Number'>
			 <b-input type='tel'
					  v-model='clientPhoneNumber'
					  maxlength='10'
					  min='0'
					  required></b-input>
		   </b-field>
		   <b-field label='Pet'
					grouped
					group-multiline
					position='is-centered'
					class='flex-vertical'>
			 <b-field label='Name'>
			   <b-input type='text'
						v-model='clientPetName'
						required></b-input>
			 </b-field>
			 <b-field label='Birthday'>
			   <b-datepicker v-model='clientPetBirthday'
							 inline
							 :max-date='maxDate'>
			   </b-datepicker>
			 </b-field>
			 <b-field label='Age'>
			   <b-input type='tel'
						v-model='clientPetAge'
						min='0'
						maxlength='2'></b-input>
			 </b-field>
			 <b-field label='Weighht'>
			   <b-input type='number'
						v-model='clientPetWeight'
						min='0'
						maxlength='4'></b-input>
			 </b-field>
			 <b-field label='Breed'>
			   <b-select v-model='clientPetBreed'
						required>
				 <option v-for='(breed, index) in breeds'
						 :key=index
						 :value='breed'>
				   {{ breed.name }}
				 </option>
			   </b-select>
			 </b-field>
		   </b-field>
	  </section>
	  <footer class='modal-card-foot'>
		<button class='button'
				type='button'
				@click=close()>
		  Cancel
		</button>
		<b-button class='button is-success'
				  @click=send()>
		  Accept
		</b-button>
		<b-message title='Success'
				   type='is-success'
				   aria-close-label='Close message'
				   icon-pack='fas'
				   icon-size='is-medium'
				   icon='check'
				   has-icon
				   auto-close
				   class='message'
				   v-if='status === OK'>
		  {{ statusText }}
		</b-message>
		<b-message title='Error'
				   type='is-danger'
				   aria-close-label='Close message'
				   icon-pack='fas'
				   icon-size='is-medium'
				   icon='exclamation'
				   has-icon
				   auto-close
				   class='message'
				   v-if='status === 401 || status === 404'>
		  {{ error }}
		</b-message>
	  </footer>
	</div>
  </form>
</template>

<script lang='js'>
import axios from 'axios'
import { EventBus } from '../eventBus.js'

export const OK = 201

export default {
	name: 'ClientForm',
	data() {
		return {
			OK,
			title: 'Create Client',
			status: null,
			statusText: '',
			error: '',
			clientName: '',
			clientAddressStreet: '',
			clientAddressNumber: null,
			clientAddressIntNumber: null,
			clientAddressPostalCode: null,
			clientPhoneNumber: null,
			clientPetName: '',
			clientPetAge: null,
			clientPetWeight: null,
			clientPetBirthday: null,
			clientPetBreed: '',
			maxDate: new Date(),
			breeds: []
		}
	},
	computed: {
		user(){
			return this.$store.state.user
		}
	},
	watch: {
		/* Calculate Age whenever the birthdate changes. */
		clientPetBirthday: function(){
			this.calculateAge(this.clientPetBirthday)
		}
	},
	methods: {
		init(){
			this.getBreeds()
		},
		clearInput(){
			this.clientName = ''
			this.clientAddressStreet = ''
			this.clientAddressNumber = null
			this.clientAddressIntNumber = null
			this.clientAddressPostalCode = null
			this.clientPhoneNumber = null
			this.clientPetName = ''
			this.clientPetAge = null
			this.clientPetWeight = null
			this.clientPetBirthday = null
			this.clientPetBreed = ''
		},
		/* Render Success Message on Modal and send event to
		 * re-render the Clients List. */
		setOnSuccess(response){
			this.status = response.status
			this.statusText = response.statusText
			this.clearInput()

			if(this.status === this.OK)
				EventBus.$emit('update-clients')
		},
		/* Render Error Message on Modal. */
		setOnError(error){
			if(error.response){
				this.status = error.response.status
				this.error = error.response.statusText
			}else if(error.request){
				this.error = error.request
			}else{
				this.error = error.message
			}
		},
		close(){
			this.$emit('close')
		},
		calculateAge(date){
			const today = new Date()
			this.clientPetAge = today.getFullYear() - date.getFullYear()
		},
		send(){
			axios.post(process.env.VUE_APP_TYRAWEB_CREATE_CLIENT, {
				/* Client */
				name: this.clientName,
				phone: this.clientPhoneNumber,
				/* Address */
				street: this.clientAddressStreet,
				number: this.clientAddressNumber,
				intNumber: this.clientAddressIntNumber,
				postalCode: this.clientAddressPostalCode,
				/* Pet */
				petName: this.clientPetName,
				petBirthday: this.clientPetBirthday,
				petAge: this.clientPetAge,
				petWeight: this.clientPetWeight,
				petBreed: this.clientPetBreed
			}, {
				headers: {
					Authorization: 'Bearer ' + this.user.token
				}
			}).then((response) => {
				this.setOnSuccess(response)
			}).catch((error) => {
				this.setOnError(error)
			})
		},
		getBreeds(){
			axios.get(process.env.VUE_APP_TYRAWEB_BREEDS, {
				headers: {
					Authorization: 'Bearer ' + this.user.token
				}
			}).then((response) => {
				this.breeds = response.data
			}).catch((error) => {
				console.error(error)
			})
		}
	},
	created(){
		this.init()
	}
}
</script>

<style scoped>
@import '../assets/css/flex.css'
</style>
