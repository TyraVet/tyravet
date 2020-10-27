<template lang='pug'>
section#vaccination-record
	VaccinationTitle
	VaccinationList( :records='records' )
</template>

<script lang='js'>
import VaccinationTitle from './VaccinationTitle.vue'
import VaccinationList from './VaccinationList.vue'

export default {
	name: 'VaccinationRecord',
	components: { VaccinationTitle, VaccinationList },
	props: {
		records: {
			type: Array,
			required: true
		}
	}
}
</script>
