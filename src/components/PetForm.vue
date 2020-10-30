<template lang='pug'>
form#pet-form
	div.modal-card( style='width: auto' )
		header.modal-card-head
			p.modal-card-title {{ title }}
			button.delete(
				type='button'
				@click='close()'
			)
		section.modal-card-body
			b-field.flex-vertical(
				label='Pet'
				grouped
				group-multiline
				position='is-centered'
			)
				b-field( label='Name' )
				b-input(
					type='text'
					v-model='petName'
					required
				)
				b-field( label='Birthday' )
				b-datepicker(
					v-model='petBirthday'
					inline
					:max-date='maxDate'
				)
				b-field( label='Age' )
				b-input(
					type='tel'
					v-model='petAge'
					min='0'
					maxlength='2'
				)
				b-field( label='Weighht' )
				b-input(
					type='number'
					v-model='petWeight'
					min='0'
					maxlength='4' )
				b-field( label='Breed' )
				b-select(
					v-model='petBreed'
					required
				)
					option(
						v-for='(breed, index) in breeds'
						:key='index'
						:value='breed') {{ breed.name }}
		footer.modal-card-foot
			button.button(
				type='button'
				@click='close()'
			) Cancel
			b-button.button.is-success(
				@click='send()'
			) Accept
			b-icon(
				title='Success'
				type='is-success'
				pack='fas'
				size='is-large'
				icon='check'
				v-if='status === OK'
			)
			b-icon(
				title='Error'
				type='is-danger'
				pack='fas'
				size='is-large'
				icon='exclamation'
				v-if='status === ERROR || status === SERVER_ERROR'
			)
</template>

<script lang='js'>
import axios from 'axios'
import { EventBus } from '../eventBus.js'

export const OK = 201
export const ERROR = 403
export const SERVER_ERROR = 500

export default {
	name: 'PetForm',
	props: {
		id: String
	},
	data(){
		return{
			OK,
			ERROR,
			SERVER_ERROR,
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
