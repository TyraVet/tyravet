<template>
  <form id='pet-form'>
	<div class='modal-card' style='width: auto'>
	  <header class='modal-card-head'>
		<p class='modal-card-title'>{{ title }}</p>
		<button type='button'
				class='delete'
				@click=close()></button>
	  </header>
	  <section class='modal-card-body'>
		<b-field label='Pet'
				 grouped
				 group-multiline
				 position='is-centered'
				 class='flex-vertical'>
		  <b-field label='Name'>
			<b-input type='text'
					 v-model='petName'
					 required></b-input>
		  </b-field>
		  <b-field label='Birthday'>
			<b-datepicker v-model='petBirthday'
						  inline
						  :max-date='maxDate'>
			</b-datepicker>
		  </b-field>
		  <b-field label='Age'>
			<b-input type='tel'
					 v-model='petAge'
					 min='0'
					 maxlength='2'></b-input>
		  </b-field>
		  <b-field label='Weighht'>
			<b-input type='number'
					 v-model='petWeight'
					 min='0'
					 maxlength='4'></b-input>
		  </b-field>
		  <b-field label='Breed'>
			<b-select v-model='petBreed'
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
				   v-if='status === ERROR'>
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
export const ERROR = 403

export default {
	name: 'PetForm',
	props: {
		id: String
	},
	data(){
		return{
			OK,
			ERROR,
			title: 'Add Pet',
			status: null,
			statusText: '',
			error: '',
			breeds: [],
			petName: '',
			petAge: null,
			petWeight: null,
			petBirthday: null,
			petBreed: '',
			maxDate: new Date()
		}
	},
	computed: {
		user(){
			return this.$store.state.user
		}
	},
	watch: {
		petBirthday: function(){
			this.calculageAge(this.petBirthday)
		}
	},
	methods: {
		init(){
			this.getBreeds()
		},
		clearInput(){
			this.petName = ''
			this.petAge = null
			this.petWeight = null
			this.petBirthday = null
			this.petBreed = ''
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
			this.petAge = today.getFullYear() - date.getFullYear()
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
		},
		send(){
			axios.post(process.env.VUE_APP_TYRAWEB_ADD_PET, {
				/* Client */
				id: this.id,
				/* Pet */
				petName: this.petName,
				petBirthday: this.petBirthday,
				petAge: this.petAge,
				petWeight: this.petWeight,
				petBreed: this.petBreed
			}, {
				headers: {
					Authorization: 'Bearer ' + this.user.token
				}
			}).then(response => {
				this.setOnSuccess(response)
			}).catch(error => {
				this.setOnError(error)
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
