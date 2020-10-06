<template lang='pug'>
form#breed-form
	div.modal-card( style='width: auto' )
		header.modal-card-head
			p.modal-card-title Create Breed
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
	data() {
		return {
			breedName: '',
			status: null,
			statusText: '',
			error: ''
		}
	},
	methods: {
		clearInput(){
			this.breedName = ''
		},
		setOnSuccess(response){
			this.status = response.status
			this.statusText = response.statusText
			this.clearInput()
		},
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
		send(){
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
		}
	}
}
</script>
