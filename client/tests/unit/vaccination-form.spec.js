import { shallowMount, createLocalVue } from '@vue/test-utils';
import store from '@/store';
import Buefy from 'buefy';
import VaccinationForm from '@/components/VaccinationForm.vue';

const localVue = createLocalVue();
localVue.use(Buefy);

/* Dummy User */
store.state.user = {
	_id: '',
	username: '',
	type: {},
	token: ''
};

const wrapper = shallowMount(VaccinationForm, {
	propsData: { petId: '' },
	store,
	localVue
});

describe('Vaccination Form', () => {
	const main = wrapper.get('#vaccination-form');
	it('Should has a main container', () => {
		expect(main.exists()).toBeTruthy();
	});

	const data = VaccinationForm.data();
	it('Should set the default data', () => {
		expect(typeof VaccinationForm.data).toBe('function');
		expect(typeof data.minDate).toBe('object');
		expect(typeof data.recordApplicationDate).toBe('string');
		expect(data.recordShot).toMatch('');
		expect(data.recordMedic).toMatch('');
		expect(typeof data.recordNextDate).toBe('object');
	});

	const props = wrapper.props();
	it('Should have props', () => {
		expect(props).toBeTruthy();
		expect(props.petId).toMatch('');
	});

	const modal = main.get('div');
	it('Should has a modal container', () => {
		expect(modal.exists()).toBeTruthy();
		expect(modal.classes()).toContain('modal-card');
	});

	const modalHeader = modal.get('.modal-card-head');
	it('Should has a modal header', () => {
		expect(modalHeader.exists()).toBeTruthy();

		const title = modalHeader.get('.modal-card-title');
		expect(title.exists()).toBeTruthy();
		expect(title.text()).toMatch(data.title);

		const closeButton = modalHeader.get('button');
		expect(closeButton.exists()).toBeTruthy();
	});

	const modalBody = modal.get('.modal-card-body');
	it('Should has a modal body with inputs', () => {
		expect(modalBody.exists()).toBeTruthy();

		const labelApplicationDateTitle = modalBody.get('#vaccination-label-application-date-title');
		expect(labelApplicationDateTitle.exists()).toBeTruthy();
		expect(labelApplicationDateTitle.attributes().label).toMatch('Application Date');

		const labelApplicationDate = modalBody.get('#vaccination-label-application-date');
		expect(labelApplicationDate.exists()).toBeTruthy();

		const labelShot = modalBody.get('#vaccination-label-shot');
		expect(labelShot.exists()).toBeTruthy();
		expect(labelShot.attributes().label).toMatch('Shot');

		const selectShot = modalBody.get('#vaccination-select-shot');
		expect(selectShot.exists()).toBeTruthy();
		expect(selectShot.attributes().required).toBeTruthy();

		const labelNextDate = modalBody.get('#vaccination-label-next-date');
		expect(labelNextDate.exists()).toBeTruthy();
		expect(labelNextDate.attributes().label).toMatch('Next Application Date');

		const datepickerNextDate = modalBody.get('#vaccination-datepicker-next-date');
		expect(datepickerNextDate.exists()).toBeTruthy();
		expect(datepickerNextDate.attributes().inline).toBeTruthy();
		expect(datepickerNextDate.attributes().required).toBeTruthy();
	});

	const modalFooter = modal.get('.modal-card-foot');
	it('Should has a modal footer with two buttons', () => {
		expect(modalFooter.exists()).toBeTruthy();

		const cancelButton = modalFooter.get('button');
		expect(cancelButton.exists()).toBeTruthy();
		expect(cancelButton.text()).toMatch(data.labelButtonCancel);

		const acceptButton = modalFooter.get('b-button-stub');
		expect(acceptButton.exists()).toBeTruthy();
		expect(acceptButton.text()).toMatch(data.labelButtonAccept);

		const successIcon = modalFooter.get('#success-icon');
		expect(successIcon.exists()).toBeTruthy();
		expect(successIcon.attributes().title).toMatch('Success');
		expect(successIcon.attributes().type).toMatch('is-success');
		expect(successIcon.attributes().pack).toMatch('fas');
		expect(successIcon.attributes().size).toMatch('is-large');
		expect(successIcon.attributes().icon).toMatch('check');

		const errorIcon = modalFooter.get('#error-icon');
		expect(errorIcon.exists()).toBeTruthy();
		expect(errorIcon.attributes().title).toMatch('Error');
		expect(errorIcon.attributes().type).toMatch('is-danger');
		expect(errorIcon.attributes().pack).toMatch('fas');
		expect(errorIcon.attributes().size).toMatch('is-large');
		expect(errorIcon.attributes().icon).toMatch('exclamation');
	});
});
