<template>
  <div class='appointments-list'>
	<div v-for='(hour, index) in hours'
		 :key='index'
		 class='hour-container has-background-primary-white'>
	  <span class='is-size-4'>
		{{ hour }}
	  </span>
	  <div>
		<h1>Brbrbrbrb</h1>
	  </div>
	</div>
  </div>
</template>

<script>
export default {
	name: 'AppointmentsList',
	data(){
		return{
			hours: []
		}
	},
	methods: {
		/* Fill the hours array with the available hours
		 * where you can set an appointment. */
		init(){
			const maxLength = 13
			const initialHour = 8

			for(let i = 0; i < maxLength; i++){
				if(i !== 0)
					this.hours.push((initialHour + i) + ':00')
				this.hours.push((initialHour + i) + ':30')
			}
		}
	},
	mounted(){
		this.init()
	}
}
</script>

<style>
@import '../assets/css/appointments-list.css'
</style>
