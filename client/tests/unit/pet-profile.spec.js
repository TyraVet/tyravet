import { shallowMount, createLocalVue } from '@vue/test-utils'
import store from '@/store'
import Buefy from 'buefy'
import PetProfile from '@/components/PetProfile.vue'
import VaccinationRecord from '@/components/VaccinationRecord.vue'
import MedicalRecord from '@/components/MedicalRecord.vue'

const localVue = createLocalVue()
localVue.use(Buefy)

/* dummy user */
store.state.user = {
	_id: '',
	username: '',
	type: {},
	token: ''
}

const wrapper = shallowMount(PetProfile, { store,
										   propsData: { id: '' },
										   localVue })

describe('Pet Component', () => {
	it('Should has components', () => {
		expect(typeof PetProfile.components).toBe('object')
	})

	it('Renders a main div container', () => {
		expect(wrapper.get('div').attributes().id).toMatch('pet-profile')
	})

	const main = wrapper.get('#pet-profile')

	it('Renders a section for the Pet Picture', () => {
		const petHeader = main.get('#pet-header')
		expect(petHeader.exists()).toBeTruthy()

		const petPictureContainer = petHeader.get('#pet-profile-picture-container')
		expect(petPictureContainer.exists()).toBeTruthy()

		const petPicture = petPictureContainer.get('img')
		expect(petPicture.attributes().id).toMatch('pet-profile-picture')
		expect(petPicture.attributes().src).toMatch('placeholder')

		const fieldFile = petPictureContainer.get('b-field-stub')
		expect(fieldFile.exists()).toBeTruthy()
		expect(fieldFile.attributes().class).toMatch('file is-primary')

		const uploadFile = fieldFile.get('b-upload-stub')
		expect(uploadFile.exists()).toBeTruthy()
		expect(uploadFile.attributes().type).toMatch('is-primary')

		const uploadIcon = uploadFile.get('span').get('b-icon-stub')
		expect(uploadIcon.exists()).toBeTruthy()
		expect(uploadIcon.attributes().icon).toMatch('upload')

		const textUploadFile = uploadFile.get('span').get('span')
		expect(textUploadFile.exists()).toBeTruthy()
		expect(textUploadFile.text()).toMatch('Click to upload')
	})

	it('Renders a section for the Pet Information', () => {
		const petInfo = main.get('#pet-info')
		expect(petInfo.exists()).toBeTruthy()

		const h1 = petInfo.get('h1')
		expect(h1.exists()).toBeTruthy()
		expect(h1.attributes().class).toMatch('is-size-2')

		const h3 = petInfo.get('h3')
		expect(h3.exists()).toBeTruthy()
		expect(h3.attributes().class).toMatch('is-size-4')

		const ownerInfo = petInfo.get('#owner-info')
		expect(ownerInfo.exists()).toBeTruthy()

		const h4 = ownerInfo.get('h4')
		expect(h4.exists()).toBeTruthy()
		expect(h4.attributes().class).toMatch('is-size-5')
	})

	it('Renders a VaccinationRecord Component', () => {
		const vaccinationRecordComp = main.findComponent(VaccinationRecord)
		expect(vaccinationRecordComp.exists()).toBeTruthy()
	})

	it('Renders a MedicalRecord Component', () => {
		const medicalRecordComp = main.findComponent(MedicalRecord)
		expect(medicalRecordComp.exists()).toBeTruthy()
	})

	it('Should have an ID prop data', () => {
		expect(wrapper.props('id')).toMatch('')
	})

	it('Should set the default data', async () => {
		expect(typeof PetProfile.data).toBe('function')
		const data = PetProfile.data()
		expect(data.pet).toMatchObject({
			name: '',
			breed: {
				name: ''
			}
		})
		expect(data.owner).toMatchObject({
			name: '',
			phone: '',
			address: {
				street: '',
				number: '',
				postalCode: ''
			}
		})
	})
})
