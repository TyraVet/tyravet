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

<script>
export default {
	name: 'TableEditDelete',
	props: {
		id: {
			type: String,
			required: true
		},
		text: {
			type: String,
			required: true
		}
	},
	data(){
		return{
		}
	},
	methods: {
		edit(){},
		deleteAt(){}
	}
}
</script>

<style scoped>
@import '../assets/css/table-edit-delete.css'
</style>
