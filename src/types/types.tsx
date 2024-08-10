export interface IProduct {
	id: number;
	name: string;
	description: string;
	price: number;
	stock: number;
}

export interface IUser {
	name: string;
	taxNumber: string;
	mail: string;
	phone: string;
	password: string;
}

export interface LoginData {
	taxNumber: string;
	password: string;
}
