import { shallowMount, createLocalVue } from '@vue/test-utils';
import store from '@/store';
import Configuration from '@/components/Configuration.vue';
import Buefy from 'buefy';

const localVue = createLocalVue();
localVue.use(Buefy);

/* Dummy User */
store.state.user = {
	_id: '',
	username: '',
	type: {},
	token: ''
}

const wrapper = shallowMount(Configuration, { store, localVue });

describe('Configuration Component', () => {
	const data = Configuration.data();
	it('Sets the correct default data', () => {
		expect(typeof Configuration.data).toBe('function');
		expect(data.OK).toBe(200);
		expect(data.CREATED).toBe(201);
		expect(data.AUTH).toBe(401);
		expect(data.NOT_FOUND).toBe(404);
		expect(data.ERROR).toBe(406);
		expect(data.title).toMatch('Configuration');
		expect(data.labelButtonAccept).toMatch('Accept');
		expect(data.status).toBeNull();
		expect(data.vetName).toMatch('');
		expect(data.street).toMatch('');
		expect(data.number).toBe(0);
		expect(data.intNumber).toBe(0);
		expect(data.zipCode).toBe(0);
		expect(data.stateOrProvince).toMatch('');
		expect(data.country).toMatch('');
		expect(data.vetLogo).toMatch('');
		expect(data.name).toMatch('');
		expect(data.code).toMatch('');
	});

	const main = wrapper.get('#configuration');
	it('Should has a main container', () => {
		expect(main.exists()).toBeTruthy();
	});

	const title = main.get('span');
	it('Should has a title section', () => {
		expect(title.exists()).toBeTruthy();
		expect(title.classes()).toContain('title-container');

		const text = title.get('h1');
		expect(text.exists()).toBeTruthy();
		expect(text.classes()).toContain('is-size-4');
		expect(text.classes()).toContain('has-text-primary-dark');
		expect(text.attributes().id).toMatch('configuration-title');
		expect(text.text()).toMatch(data.title);
	});

	const form = main.get('form');
	it('Should has a form', () => {
		expect(form.exists()).toBeTruthy();
		expect(form.attributes().id).toMatch('configuration-form');

		const labelVetName = form.get('#label-vet-name');
		expect(labelVetName.exists()).toBeTruthy();
		expect(labelVetName.attributes().label).toMatch('Veterinary Name');

		const inputVetName = form.get('#input-vet-name');
		expect(inputVetName.exists()).toBeTruthy();
		expect(inputVetName.attributes().type).toMatch('text');
		expect(inputVetName.attributes().maxlength).toMatch('20');

		const sectionAddress = form.get('#section-address');
		expect(sectionAddress.exists()).toBeTruthy();
		expect(sectionAddress.attributes().label).toMatch('Address');
		expect(sectionAddress.attributes().grouped).toBeTruthy();
		expect(sectionAddress.attributes().groupmultiline).toBeTruthy();
		expect(sectionAddress.attributes().position).toMatch('is-centered');

		const labelStreet = sectionAddress.get('#label-street');
		expect(labelStreet.exists()).toBeTruthy();
		expect(labelStreet.attributes().label).toMatch('Street')

		const inputStreet = sectionAddress.get('#input-street');
		expect(inputStreet.exists()).toBeTruthy();
		expect(inputStreet.attributes().type).toMatch('text');
		expect(inputStreet.attributes().maxlength).toMatch('50');

		const labelNumber = sectionAddress.get('#label-number');
		expect(labelNumber.exists()).toBeTruthy();
		expect(labelNumber.attributes().label).toMatch('Number')

		const inputNumber = sectionAddress.get('#input-number');
		expect(inputNumber.exists()).toBeTruthy();
		expect(inputNumber.attributes().type).toMatch('phone-number');
		expect(inputNumber.attributes().maxlength).toMatch('5');

		const labelIntNumber = sectionAddress.get('#label-int-number');
		expect(labelIntNumber.exists()).toBeTruthy();
		expect(labelIntNumber.attributes().label).toMatch('Internal Number')

		const inputIntNumber = sectionAddress.get('#input-int-number');
		expect(inputIntNumber.exists()).toBeTruthy();
		expect(inputIntNumber.attributes().type).toMatch('phone-number');
		expect(inputIntNumber.attributes().maxlength).toMatch('5');

		const labelZipCode = sectionAddress.get('#label-zip-code');
		expect(labelZipCode.exists()).toBeTruthy();
		expect(labelZipCode.attributes().label).toMatch('Zip Code')

		const inputZipCode = sectionAddress.get('#input-zip-code');
		expect(inputZipCode.exists()).toBeTruthy();
		expect(inputZipCode.attributes().type).toMatch('phone-number');
		expect(inputZipCode.attributes().maxlength).toMatch('6');

		const labelStateOrProvince = sectionAddress.get('#label-state-or-province');
		expect(labelStateOrProvince.exists()).toBeTruthy();
		expect(labelStateOrProvince.attributes().label).toMatch('State/Province')

		const inputStateOrProvince = sectionAddress.get('#input-state-or-province');
		expect(inputStateOrProvince.exists()).toBeTruthy();
		expect(inputStateOrProvince.attributes().type).toMatch('text');
		expect(inputStateOrProvince.attributes().maxlength).toMatch('20');

		const labelCountry = sectionAddress.get('#label-country');
		expect(labelCountry.exists()).toBeTruthy();
		expect(labelCountry.attributes().label).toMatch('Country')

		const inputCountry = sectionAddress.get('#input-country');
		expect(inputCountry.exists()).toBeTruthy();
		expect(inputCountry.attributes().type).toMatch('text');
		expect(inputCountry.attributes().maxlength).toMatch('20');

		const labelVetLogo = form.get('#label-vet-logo');
		expect(labelVetLogo.exists()).toBeTruthy();
		expect(labelVetLogo.attributes().label).toMatch('Veterinary Logo');

		const sectionHeadOfMedics = form.get('#section-head-of-medics');
		expect(sectionHeadOfMedics.exists()).toBeTruthy();
		expect(sectionHeadOfMedics.attributes().label).toMatch('Veterinarian Head of Medics');
		expect(sectionHeadOfMedics.attributes().grouped).toBeTruthy();
		expect(sectionHeadOfMedics.attributes().groupmultiline).toBeTruthy();
		expect(sectionHeadOfMedics.attributes().position).toMatch('is-centered');

		const labelName = sectionHeadOfMedics.get('#label-name');
		expect(labelName.exists()).toBeTruthy();
		expect(labelName.attributes().label).toMatch('Name');

		const inputName = sectionHeadOfMedics.get('#input-name');
		expect(inputName.exists()).toBeTruthy();
		expect(inputName.attributes().type).toMatch('text');
		expect(inputName.attributes().maxlength).toMatch('50');

		const labelCode = sectionHeadOfMedics.get('#label-code');
		expect(labelCode.exists()).toBeTruthy();
		expect(labelCode.attributes().label).toMatch('Code');

		const inputCode = sectionHeadOfMedics.get('#input-code');
		expect(inputCode.exists()).toBeTruthy();
		expect(inputCode.attributes().type).toMatch('text');
		expect(inputCode.attributes().maxlength).toMatch('30');

		const buttonContainer = form.get('#button-container');
		expect(buttonContainer.exists()).toBeTruthy();

		const buttonAccept = buttonContainer.get('b-button-stub');
		expect(buttonAccept.exists()).toBeTruthy();
		expect(buttonAccept.classes()).toContain('button');
		expect(buttonAccept.classes()).toContain('is-success');
		expect(buttonAccept.text()).toMatch(data.labelButtonAccept);
	});

	it('Should has an init method', () => {
		expect(wrapper.vm.init).toBeTruthy();
	});

	it('Should has a getSetup method', () => {
		expect(wrapper.vm.getSetup).toBeTruthy();
	});

	it('Should has a send method', () => {
		expect(wrapper.vm.send).toBeTruthy();
	});

	it('Should has a setOnSuccess method', () => {
		expect(wrapper.vm.setOnSuccess).toBeTruthy();
	});
});
