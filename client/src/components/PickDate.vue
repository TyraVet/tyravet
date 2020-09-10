<template>
  <div class='pick-date'>
	<div class='modal-card pick-date-container'>
	  <header class='modal-card-head'>
		<p class='modal-card-title'>{{ title }}</p>
		<button type='button'
				class='delete'
				@click=close() />
	  </header>
	  <section class='modal-card-body'>
		<b-field label='Select Date'>
		  <b-datepicker v-model='day'
						trap-focus>
		  </b-datepicker>
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
  </div>
</template>

<script>
import { EventBus } from '../eventBus.js'

export default {
	name: 'PickDate',
	data() {
		return {
			title: 'Select Date',
			day: null
		}
	},
	methods: {
		close(){
			this.$emit('close')
		},
		send(){
			/* Emit event so the Appointments List and
			 * Appointments Header can listen to
			 * and receive the updated date. */
			if(this.day){
				EventBus.$emit('update-date', this.day)
				EventBus.$emit('update-header', this.day)
				this.close()
			}
		}
	}
}
</script>

<style>
@import '../assets/css/pick-date.css'
</style>
