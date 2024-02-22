

export interface restaurantsType {
    id: number | string;
    name: string;
    contact: string;
    address: string;
    userId?: string
}


export interface User {
    id: string,
    name: string,
    email: string,
    password: string
}