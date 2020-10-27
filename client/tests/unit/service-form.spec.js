import { shallowMount, createLocalVue } from '@vue/test-utils';
import store from '@/store';
import Buefy from 'buefy';
import ServiceForm from '@/components/ServiceForm.vue';

const localVue = createLocalVue();
localVue.use(Buefy);

/* Dummy User */
store.state.user = {
	_id: '',
	username: '',
	type: {},
	token: ''
};

const wrapper = shallowMount(ServiceForm, { store, localVue });

describe('ServiceForm Component', () => {
	const main = wrapper.get('#service-form');
	it('Should has a main container', () => {
		expect(main.exists()).toBeTruthy();
	});

	const data = ServiceForm.data();
	it('Should set the default data', () => {
		expect(typeof ServiceForm.data).toBe('function');
		expect(data.serviceName).toMatch('');
		expect(data.servicePrice).toBe(0);
		expect(data.serviceType).toMatch('');
		expect(data.title).toMatch('');
		expect(data.labelButtonCancel).toMatch('Cancel');
		expect(data.labelButtonAccept).toMatch('Accept');
		expect(data.status).toBeNull();
	});

	const props = wrapper.props();
	it('Should set default props if not sent', () => {
		expect(props).toBeTruthy();
		expect(props.serviceId).toBeNull();
	});

	const modal = main.get('div');
	it('Should has a modal component', () => {
		expect(modal.exists()).toBeTruthy();
		expect(modal.classes('modal-card')).toBeTruthy();
	});

	const modalHeader = modal.get('.modal-card-head');
	it('Should has a modal Head', () => {
		expect(modalHeader.exists()).toBeTruthy();

		const title = modalHeader.get('.modal-card-title');
		expect(title.exists()).toBeTruthy();
		expect(title.text()).toMatch(data.title);

		const closeButton = modalHeader.get('button');
		expect(closeButton.exists()).toBeTruthy();
	});

	const modalBody = modal.get('.modal-card-body');
	it('Should has a modal Body', () => {
		expect(modalBody.exists()).toBeTruthy();

		const labelName = modalBody.get('#service-label-name');
		expect(labelName.exists()).toBeTruthy();
		expect(labelName.attributes().label).toMatch('Name');

		const inputName = modalBody.get('#service-input-name');
		expect(inputName.exists()).toBeTruthy();
		expect(inputName.attributes().type).toMatch('text');
		expect(inputName.attributes().required).toBeTruthy();

		const labelPrice = modalBody.get('#service-label-price');
		expect(labelPrice.exists()).toBeTruthy();
		expect(labelPrice.attributes().label).toMatch('Price');

		const inputPrice = modalBody.get('#service-input-price');
		expect(inputPrice.exists()).toBeTruthy();
		expect(inputPrice.attributes().type).toMatch('phonenumber');
		expect(inputPrice.attributes().required).toBeTruthy();

		const labelType = modalBody.get('#service-label-type');
		expect(labelType.exists()).toBeTruthy();
		expect(labelType.attributes().label).toMatch('Type');

		const selectType = modalBody.get('#service-select-type');
		expect(selectType.exists()).toBeTruthy();
		expect(selectType.attributes().required).toBeTruthy();
	});

	const modalFooter = modal.get('.modal-card-foot');
	it('Should has a modal Foot', async () => {
		expect(modalFooter.exists()).toBeTruthy();

		const cancelButton = modalFooter.get('button');
		expect(cancelButton.exists()).toBeTruthy();
		expect(cancelButton.text()).toMatch(data.labelButtonCancel);

		const acceptButton = modalFooter.get('b-button-stub');
		expect(acceptButton.exists()).toBeTruthy();
		expect(acceptButton.text()).toMatch(data.labelButtonAccept);

		await wrapper.setData({ status: 200 });
		const successIcon = modalFooter.get('#success-icon');
		expect(successIcon.exists()).toBeTruthy();
		expect(successIcon.attributes().title).toMatch('Success');
		expect(successIcon.attributes().type).toMatch('is-success');
		expect(successIcon.attributes().pack).toMatch('fas');
		expect(successIcon.attributes().size).toMatch('is-large');
		expect(successIcon.attributes().icon).toMatch('check');

		await wrapper.setData({ status: 401 });
		const errorIcon = modalFooter.get('#error-icon');
		expect(errorIcon.exists()).toBeTruthy();
		expect(errorIcon.attributes().title).toMatch('Error');
		expect(errorIcon.attributes().type).toMatch('is-danger');
		expect(errorIcon.attributes().pack).toMatch('fas');
		expect(errorIcon.attributes().size).toMatch('is-large');
		expect(errorIcon.attributes().icon).toMatch('exclamation');
	});

	it('Should change title if ID is sent', async () => {
		const title = modalHeader.get('.modal-card-title');
		expect(title.text()).toMatch('Create Service');

		/* Send ID on mount */
		const wrapper2 = shallowMount(ServiceForm, {
			propsData: {
				serviceId: 'test'
			}, store, localVue });
		const main2 = wrapper2.get('#service-form');
		const modal2 = main2.get('div');
		const modalHeader2 = modal2.get('.modal-card-head');

		expect(modalHeader2.get('.modal-card-title').text()).toMatch('Edit Service');
	});

	it('Should has an init method', () => {
		expect(wrapper.vm.init).toBeTruthy();
	});

	it('Should has a close method', () => {
		expect(wrapper.vm.close).toBeTruthy();
	});

	it('Should has a send method', () => {
		expect(wrapper.vm.send).toBeTruthy();
	});

	it('Should has a clearInputs method', () => {
		expect(wrapper.vm.clearInputs).toBeTruthy();
	});

	it('Should has a createService method', () => {
		expect(wrapper.vm.createService).toBeTruthy();
	});

	it('Should has a getService method', () => {
		expect(wrapper.vm.getService).toBeTruthy();
	});

	it('Should has an updateService method', () => {
		expect(wrapper.vm.updateService).toBeTruthy();
	});

	it('Should has a setOnSuccess method', () => {
		expect(wrapper.vm.setOnSuccess).toBeTruthy();
	});

	it('Should has a setOnError method', () => {
		expect(wrapper.vm.setOnError).toBeTruthy();
	});
});
