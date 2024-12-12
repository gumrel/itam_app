export interface IUser {
	id: number;
	username: string;
	fullName: string;
}

export interface IRegistrationForm {
	name: string;
	fio: string;
	pass: string;
	group: string;
	telegram: string;
	email: string;
	receiveNotifications: boolean;
	isAdmin: boolean;
}
