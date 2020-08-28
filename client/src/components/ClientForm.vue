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
					position='is-centered'>
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
					position='is-centered'>
			 <b-field label='Name'>
			   <b-input type='text'
						v-model='clientPetName'
						required></b-input>
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
			 <b-field label='Birthday'>
			   <b-datepicker v-model='clientPetBirthday'
							 :max-date='maxDate'>
			   </b-datepicker>
			 </b-field>
			 <b-field label='Breed'>
			   <b-input type='text'
						v-model='clientPetBreed'
						min='0'
						required></b-input>
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
	name: 'ClientForm',
	data() {
		return {
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
			maxDate: new Date()
		}
	},
	methods: {
		clearInput(){
			this.clientName = ''
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
			axios.post(process.env.VUE_APP_TYRAWEB_CREATE_CLIENT, {
				name: this.clientName
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
