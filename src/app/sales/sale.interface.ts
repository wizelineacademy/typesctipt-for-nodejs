export interface ISale {
    _id?: string,
    customerName: string,
    customerPhoneNumber: string,
    customerEmail?: string,
    cakeId: string,
    totalAmount?: number,
    quality?: number,
}
