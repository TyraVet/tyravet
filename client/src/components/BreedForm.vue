<template lang='pug'>
form#breed-form
	div.modal-card( style='width: auto' )
		header.modal-card-head
			p.modal-card-title {{ title }}
			button(
				type='button'
				class='delete'
				@click='close()'
			)
		section.modal-card-body
			b-field( label='Name' )
			b-input(
				type='text'
				v-model='breedName'
				required
			)
		footer.modal-card-foot
			button.button(
				type='button'
				@click='close()'
			) Cancel
			b-button.button.is-success(
				@click='send()'
			) Accept
			b-message.message(
				title='Success'
				type='is-success'
				aria-close-label='Close message'
				icon-pack='fas'
				icon-size='is-medium'
				icon='check'
				has-icon
				auto-close
				v-if='status === 201 || status === 200'
			) {{ statusText }}
			b-message.message(
				title='Error'
				type='is-danger'
				aria-close-label='Close message'
				icon-pack='fas'
				icon-size='is-medium'
				icon='exclamation'
				has-icon
				auto-close
				v-if='status === 401 || status === 404'
			) {{ error }}
</template>

<script lang='js'>
import axios from 'axios'

export default {
	name: 'BreedForm',
	props: {
		breedId: {
			type: String,
			required: false,
			default: null
		}
	},
	data() {
		return {
			title: 'Create Breed',
			breedName: '',
			status: null
		}
	},
	methods: {
		init(){
			if(!this.breedId)
				this.title = 'Edit Breed'
		},
		clearInput(){
			this.breedName = ''
		},
		setOnSuccess(response){
			this.status = response.status

			if(!this.breedId)
				this.clearInput()
		},
		setOnError(error){
			if(error.response)
				this.status = error.response.status
		},
		close(){
			this.$emit('close')
		},
		send(){
			if(!this.breedId)
				this.createBreed()
			else
				this.editBreed()
		},
		createBreed(){
			axios.post(process.env.VUE_APP_TYRAWEB_CREATE_BREED, {
				name: this.breedName
			}, {
				headers: {
					Authorization: 'Bearer ' + this.$store.state.user.token
				}
			}).then((response) => {
				this.setOnSuccess(response)
			}).catch((error) => {
				this.setOnError(error)
			})
		},
		editBreed(){}
	},
	created(){
		this.init()
	}
}
</script>
