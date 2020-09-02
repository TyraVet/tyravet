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
		   <b-field label='Service'>
			 <b-select v-model='service'
					   required>
			   <option v-for='(service, index) in services'
					   :key=index
					   :value='service'>
				 {{ service.name }}
			   </option>
			 </b-select>
		   </b-field>
		   <b-field label='Hour'>
			 <b-input type='text'
					  v-model='hour.hour'
					  required
					  disabled>
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
	  </footer>
	</div>
  </form>
</template>

<script>
import axios from 'axios'

export default {
	name: 'AppointmentForm',
	props: {
		hour: Object
	},
	data() {
		return {
			title: 'New Appointment',
			services: []
		}
	},
	methods: {
		close(){
			this.$emit('close')
		},
		getServices(){
			axios.get(process.env.VUE_APP_TYRAWEB_SERVICES, {
				headers: {
					Authorization: 'Bearer ' + this.$store.state.user.token
				}
			}).then((response) => {
				this.services = response.data
			}).catch((error) => {
				console.error(error)
			})
		}
	},
	mounted(){
		this.getServices()
	}
}
</script>
