export interface ISale {
    customerName: string;
    customerPhoneNumber: string;
    customerEmail: string;
    totalAmount: number;
    cakeId: string; 
}

export interface ISaleQuery {
    week?: number;
    year?: number;
}