<template lang='pug'>
section#medical-title
	b-icon(
		pack='fas'
		icon='stethoscope'
		size='is-large'
		type='is-icon'
	)
	h1.is-size-3 {{ title }}
</template>

<script lang='js'>
export default {
	name: 'MedicalTitle',
	data(){
		return{
			title: 'Medical Record'
		}
	}
}
</script>
