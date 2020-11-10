<template lang='pug'>
Modal#breed-form( :title='title' type='breed' )
	template( v-slot:main )
		b-field( label='Name' )
		b-input(
			type='text'
			v-model='breedName'
			required='true'
		)
</template>

<script lang='js'>
import axios from 'axios'
import { EventBus } from '../eventBus.js'
import Modal from '@/components/Modal.vue'

export default {
	name: 'BreedForm',
	components: { Modal },
	props: {
		id: {
			type: String,
			required: false,
			default: null
		}
	},
	data(){
		return {
			title: this.id ? 'Edit Breed' : 'Create Breed',
			breedName: '',
			status: null
		}
	},
	methods: {
		init(){
			if(this.id){
				this.getBreed()
			}
		},
		clearInput(){
			if(!this.id)
				this.breedName = ''
		},
		send(){
			if(!this.id)
				this.createBreed()
			else if(this.id)
				this.updateBreed()
		},
		setOnSuccess(response){
			this.status = response.status
			this.clearInput()
			EventBus.$emit('status', this.status)
			EventBus.$emit('update-breeds')
		},
		fillOnSuccess(response){
			this.breedName = response.data.name
		},
		setOnError(error){
			if(error.response)
				this.status = error.response.status
		},
		createBreed(){
			axios.post(process.env.VUE_APP_TYRAWEB_CREATE_BREED, {
				name: this.breedName
			}, {
				headers: {
					Authorization: 'Bearer ' + this.$store.state.user.token
				}
			}).then(response => {
				this.setOnSuccess(response)
			}).catch(error => {
				this.setOnError(error)
			})
		},
		getBreed(){
			axios.get(process.env.VUE_APP_TYRAWEB_FIND_BREED, {
				params: {
					id: this.id
				},
				headers: {
					Authorization: 'Bearer ' + this.$store.state.user.token
				}
			}).then(response => {
				this.fillOnSuccess(response)
			}).catch(error => {
				this.setOnError(error)
			})
		},
		updateBreed(){
			axios.post(process.env.VUE_APP_TYRAWEB_UPDATE_BREED, {
				id: this.id,
				name: this.breedName
			}, {
				headers: {
					Authorization: 'Bearer ' + this.$store.state.user.token
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

		/* Event Listeners
		 *
		 * Here we listen when the user click both buttons of the
		 * modal. */
		EventBus.$on('request-breed', () => { this.send() })
		EventBus.$on('close-modal', () => { this.$emit('close') })
	}
}
</script>
