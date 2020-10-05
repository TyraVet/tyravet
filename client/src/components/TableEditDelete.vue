<template>
  <section id='table-edit-delete'>
	{{ text }}
	<div id='button-container'>
	  <b-button id='edit'
				title='Edit'
				type='is-warning'
				icon-pack='fas'
				icon-left='edit'
				class='has-text-dark'
				@click=edit()></b-button>
	  <b-button id='delete'
				title='Delete'
				type='is-danger'
				icon-pack='fas'
				icon-left='trash-alt'
				class='has-text-white'
				@click=deleteAt()></b-button>
	</div>
  </section>
</template>

<script lang='js'>
import ServiceForm from '@/components/ServiceForm.vue'

export default {
	name: 'TableEditDelete',
	components: { ServiceForm },
	props: {
		id: {
			type: String,
			required: true
		},
		text: {
			type: String,
			required: true
		},
		type: {
			type: String,
			required: true
		}
	},
	data(){
		return{
			isForServices: false
		}
	},
	methods: {
		init(){
			if(this.type === 'service')
				this.isForServices = true
		},
		edit(){},
		deleteAt(){}
	},
	created(){
		this.init()
	}
}
</script>

<style scoped>
@import '../assets/css/table-edit-delete.css'
</style>
