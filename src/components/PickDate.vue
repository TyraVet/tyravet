<template lang='pug'>
div.pick-date
	div.modal-card
		header.modal-card-head
			p.modal-card-title {{ title }}
			button.delete(
				type='button'
				@click='close()'
			)
		section.modal-card-body
			b-field( label='Select Date' )
			b-datepicker(
				v-model='date'
				inline
				trap-focus
			)
		footer.modal-card-foot
			button.button(
				type='button'
				@click='close()'
			) Cancel
			b-button.button.is-success(
				@click='send()'
			) Accept
</template>

<script lang='js'>
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
