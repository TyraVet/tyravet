import { shallowMount, createLocalVue } from '@vue/test-utils';
import store from '@/store';
import Buefy from 'buefy';
import CreateUserForm from '@/components/CreateUserForm.vue';

/* We import createLocalVue to load Buefy and store */
const localVue = createLocalVue();
localVue.use(Buefy);

/* Dummy User */
store.state.user = {
	_id: '',
	username: '',
	type: { name: '' },
	token: ''
};

const wrapper = shallowMount(CreateUserForm, { store, localVue });

describe('CreateUserForm Component', () => {
	const data = CreateUserForm.data();
	it('Set the correct default data', () => {
		expect(typeof CreateUserForm.data).toBe('function');
		expect(data.title).toMatch('');
		expect(data.username).toMatch('');
		expect(data.password).toMatch('');
		expect(data.confirmPassword).toMatch('');
		expect(data.fullName).toMatch('');
		expect(data.branchOffice).toMatch('');
		expect(data.validationMessageConfirmPassword).toMatch('');
		expect(data.status).toBeNull();
		expect(data.type).toMatch('medic');
	});

	const main = wrapper.get('#create-user-form');
	it('Should has a main container', () => {
		expect(main.exists()).toBeTruthy();
	});

	const modal = main.get('div');
	it('Should has a modal', () => {
		expect(modal.exists()).toBeTruthy();
	});

	const modalHeader = modal.get('.modal-card-head');
	it('Should has a modal Header', () => {
		expect(modalHeader.exists()).toBeTruthy();

		const title = modalHeader.get('.modal-card-title');
		expect(title.exists()).toBeTruthy();
		expect(title.text()).toMatch(data.title);

		const button = modalHeader.get('button');
		expect(button.exists()).toBeTruthy();
		expect(button.attributes().type).toMatch('button');
	});

	const modalBody = modal.get('.modal-card-body');
	it('Should has a modal Body', () => {
		expect(modalBody.exists()).toBeTruthy();

		const usernameLabel = modalBody.get('#username');
		expect(usernameLabel.exists()).toBeTruthy();
		expect(usernameLabel.attributes().label).toMatch('Username');

		const usernameInput = usernameLabel.get('b-input-stub');
		expect(usernameInput.exists()).toBeTruthy();
		expect(usernameInput.attributes().type).toMatch('text');
		expect(usernameInput.attributes().minlength).toMatch('4');
		expect(usernameInput.attributes().required).toMatch('');

		const passwordLabel = modalBody.get('#password');
		expect(passwordLabel.exists()).toBeTruthy();
		expect(passwordLabel.attributes().label).toMatch('Password');

		const passwordInput = passwordLabel.get('b-input-stub');
		expect(passwordInput.exists()).toBeTruthy();
		expect(passwordInput.attributes().type).toMatch('password');
		expect(passwordInput.attributes().minlength).toMatch('8');
		expect(passwordInput.attributes().required).toMatch('');

		const confirmPassLabel = modalBody.get('#confirm-password');
		expect(confirmPassLabel.exists()).toBeTruthy();
		expect(confirmPassLabel.attributes().label).toMatch('Confirm Password');

		const confirmPassInput = confirmPassLabel.get('b-input-stub');
		expect(confirmPassInput.exists()).toBeTruthy();
		expect(confirmPassInput.attributes().type).toMatch('password');
		expect(confirmPassInput.attributes().minlength).toMatch('8');
		expect(confirmPassInput.attributes().required).toMatch('');

		const fullNameLabel = modalBody.get('#fullname');
		expect(fullNameLabel.exists()).toBeTruthy();
		expect(fullNameLabel.attributes().label).toMatch('Full Name');

		const fullNameInput = fullNameLabel.get('b-input-stub');
		expect(fullNameInput.exists()).toBeTruthy();
		expect(fullNameInput.attributes().type).toMatch('text');

		const branchOfficeLabel = modalBody.get('#branch-office');
		expect(branchOfficeLabel.exists()).toBeTruthy();
		expect(branchOfficeLabel.attributes().label).toMatch('Branch Office');

		const branchOfficeSelect = branchOfficeLabel.get('b-select-stub');
		expect(branchOfficeSelect.exists()).toBeTruthy();
	});

	const modalFooter = modal.get('.modal-card-foot');
	it('Should has a modal Footer', async () => {
		expect(modalFooter.exists()).toBeTruthy();

		const cancelButton = modalFooter.get('button');
		expect(cancelButton.exists()).toBeTruthy();
		expect(cancelButton.attributes().type).toMatch('button');
		expect(cancelButton.text()).toMatch('Cancel');

		const acceptButton = modalFooter.get('b-button-stub');
		expect(acceptButton.exists()).toBeTruthy();
		expect(acceptButton.classes('button')).toBeTruthy();
		expect(acceptButton.classes('is-success')).toBeTruthy();
		expect(acceptButton.text()).toMatch('Accept');

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

	it('Should change title and change password label if ID is sent', async () => {
		const title = modalHeader.get('.modal-card-title');
		expect(title.text()).toMatch('Create User');

		/* Send ID on mount */
		const wrapper2 = shallowMount(CreateUserForm, {
			propsData: {
				userId: 'test'
			}, store, localVue })
		const main2 = wrapper2.get('#create-user-form');
		const modal2 = main2.get('div');
		const modalHeader2 = modal2.get('.modal-card-head');
		const modalBody2 = modal2.get('.modal-card-body');

		expect(modalHeader2.get('.modal-card-title').text()).toMatch('Edit User');
		expect(modalBody2.get('#change-password').exists()).toBeTruthy();
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
});
