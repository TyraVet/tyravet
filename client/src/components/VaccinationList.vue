<template lang='pug'>
section#vaccination-list
	ErrorMessage( v-if='noRecords' :message='errorMessage' )
</template>

<script lang='js'>
import ErrorMessage from '@/components/ErrorMessage.vue'

export default {
	name: 'VaccinationList',
	components: { ErrorMessage },
	data(){
		return{
			records: [],
			errorMessage: 'There are no Vaccination/Deworming Records for this pet. Add one!',
			noRecords: true
		}
	}
}
</script>
