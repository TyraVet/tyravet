<template>
  <div class='pick-date'>
	<div class='modal-card'>
	  <header class='modal-card-head'>
		<p class='modal-card-title'>{{ title }}</p>
		<button type='button'
				class='delete'
				@click=close() />
	  </header>
	  <section class='modal-card-body'>
		<b-field label='Select Date'>
		  <b-datepicker v-model='date'
						inline
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
			date: null
		}
	},
	props: {
		day: Date
	},
	methods: {
		init(){
			this.date = this.day
		},
		close(){
			this.$emit('close')
		},
		send(){
			/* Emit event so the Appointments List and
			 * Appointments Header can listen to
			 * and receive the updated date. */
			if(this.date){
				EventBus.$emit('update-date', this.date)
				EventBus.$emit('update-header', this.date)
				this.close()
			}
		}
	},
	created(){
		this.init()
	}
}
</script>
