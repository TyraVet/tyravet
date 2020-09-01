<template>
  <div class='appointments-list'>
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
