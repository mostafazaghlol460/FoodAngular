export interface Order {
    id: number;
    date: Date;
    quantity: number;
    total: number;
    userName: string;
    userId: string;
    user: User[];
}

export interface User {
    id: string;
    name: string;
}

