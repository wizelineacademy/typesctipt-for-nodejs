import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const SellSchema = new Schema({
	id: {
		type: Number,
		unique: true,
	},
	customerName: {
		type: String,				
	},
	customerPhoneNumber: {
		type: String,
	},
	customerEmail: {
		type: String,
	},	
	totalAmount: {
		type: Number,
	}	
});

export const sellModel = mongoose.model('Sell', SellSchema);