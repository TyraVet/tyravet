<template lang='pug'>
section#vaccination-record
	VaccinationTitle( :petId='petId' )
	VaccinationList( :records='records' )
</template>

<script lang='js'>
import VaccinationTitle from './VaccinationTitle.vue'
import VaccinationList from './VaccinationList.vue'

export default {
	name: 'VaccinationRecord',
	components: { VaccinationTitle, VaccinationList },
	props: {
		petId: {
			type: String,
			required: true
		},
		records: {
			type: Array,
			required: true
		}
	}
}
</script>
