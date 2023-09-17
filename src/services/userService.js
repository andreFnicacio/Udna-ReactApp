import { Auth } from 'aws-amplify';
import { masks } from './maskService';

const SignInService = async (username, password) => {
	try {
		const res = await Auth.signIn(username, password);

		return [null, res];
	} catch (error) {
		return [error, null];
	}
};

const SignOutService = async () => {
	try {
		const res = await Auth.signOut();

		return [null, res];
	} catch (error) {
		return [error, null];
	}
};

const ForgotPasswordService = async username => {
	try {
		const res = await Auth.forgotPassword(username);

		return [null, res];
	} catch (error) {
		return [error, null];
	}
};

const ForgotPasswordSubmitService = async (username, code, newPassword) => {
	try {
		const res = await Auth.forgotPasswordSubmit(username, code, newPassword);

		return [null, res];
	} catch (error) {
		return [error, null];
	}
};

const GetCurrentUserService = async () => {
	try {
		const res = await Auth.currentAuthenticatedUser();

		return [null, res];
	} catch (error) {
		return [error, null];
	}
};

const GetCurrentSessionService = async () => {
	try {
		const res = await Auth.currentSession();

		return [null, res];
	} catch (error) {
		return [error, null];
	}
};

const mapUserService = userData => {
	const data = {
		cpf: masks.cpf(userData.cpf),
		name: userData.name,
		email: userData.email,
		cellphone: masks.cellphone(userData.cellphone),
		restoreId: userData.restoreId,
		nutritionalProfile: userData.nutritionalProfile,
	};

	if (userData.address) {
		data.address = {
			zipCode: masks.zipCode(userData.address?.zipCode),
			street: userData.address?.street,
			number: userData.address?.number,
			complement: userData.address?.complement,
			neighborhood: userData.address?.neighborhood,
			city: userData.address?.city,
			stateInitials: userData.address?.stateInitials,
			stateName: userData.address?.stateName,
		};
	} else {
		data.address = null;
	}

	return data;
};

export {
	SignInService,
	SignOutService,
	ForgotPasswordService,
	ForgotPasswordSubmitService,
	GetCurrentUserService,
	GetCurrentSessionService,
	mapUserService,
};
