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
			 <b-input type='text'
					  required>
			 </b-input>
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
export default {
	name: 'AppointmentForm',
	props: {
		hour: Object
	},
	data() {
		return {
			title: 'New Appointment'
		}
	},
	methods: {
		close(){
			this.$emit('close')
		}
	}
}
</script>
