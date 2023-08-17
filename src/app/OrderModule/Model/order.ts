export interface Order {
    id: number;
    date: Date;
    quantity: number;
    total: number;
    userName: string;
}

export interface User {
    id: string;
    name: string;
    email: string;
    phoneNumber: string;

}

