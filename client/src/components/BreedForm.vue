<template>
  <form id='breed-form'>
	<div class='modal-card' style='width: auto'>
	  <header class='modal-card-head'>
		<p class='modal-card-title'>Create Breed</p>
		<button type='button'
				class='delete'
				@click=close() />
	  </header>
	  <section class='modal-card-body'>
		   <b-field label='Name'>
			 <b-input type='text'
					  v-model='breedName'
					  required>
			 </b-input>
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
				   v-if='status === 201 || status === 200'>
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

<script>
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
