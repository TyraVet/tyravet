<template>
  <b-message type='is-danger'
			 icon-pack='fas'
			 icon-size='is-medium'
			 icon='exclamation'
			 has-icon>
	{{ message }}
  </b-message>
</template>

<script>
export default {
	name: 'AppointmentError',
	data(){
		return{
			message: 'Error: You can not create new appointments on passed days'
		}
	}
}
</script>
