import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const CakeSchema = new Schema({
	id: {
		type: Number,
		unique: true,
	},
	name: {
		type: String,		
		unique: true,
	},
	description: {
		type: String,
	},
	ingredients: {
		type: [String]
	},
	price: {
		type: Number,
	},
	stock: {
		type: Number,
	},
	status: {
		type: String,
	}
});

export const cakeModel = mongoose.model('Cake', CakeSchema);
