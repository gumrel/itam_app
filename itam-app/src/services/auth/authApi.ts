import httpService from '~/services/httpService';
import type { IUser } from '../commentsTypes';

export async function login() {
	try {
		const url = `https://e7d8a4eab9d32595.mokky.dev/users`;
		const userData = await httpService.get<IUser>(url);
		return userData;
	} catch (error) {
		console.error(error);
		throw error;
	}
}

export async function registration() {
	try {
		const url = `https://e7d8a4eab9d32595.mokky.dev/users`;
		const userData = await httpService.get<IUser>(url);
		return userData;
	} catch (error) {
		console.error(error);
		throw error;
	}
}
