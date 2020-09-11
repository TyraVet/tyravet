<template>
  <div class='appointment'>
	<section>
	  <div class='field'>
		<b-checkbox type='is-success'
					v-model='isDone'>
		  <div class='appointment-container' :class='{ done: isDone }'>
			<h3 class='is-size-5 has-text-primary'>
			  {{ appointment.service.name }}
			</h3>
			<h3 class='is-size-5 has-text-dark'>
			  |
			  {{ appointment.client.pets[0].name }},
			  ({{ appointment.client.pets[0].breed.name }})
			  -
			</h3>
			<h3 class='is-size-5 has-text-grey-darker'>
			  {{ appointment.client.name }}, {{ appointment.client.phone }}
			</h3>
		  </div>
		</b-checkbox>
	  </div>
	</section>
  </div>
</template>

<script>
export default {
	name: 'Appointment',
	props: {
		appointment: Object
	},
	data(){
		return{
			isDone: false
		}
	}
}
</script>

<style>
@import '../assets/css/appointment.css'
</style>
