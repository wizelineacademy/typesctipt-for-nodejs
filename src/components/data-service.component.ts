import { Connection, Document, Model } from 'mongoose';

export class DataService<T> {
	readonly connection: Connection;
	readonly model: Model<Document & T>;

	constructor(connection: Connection, modelName: string) {
		this.connection = connection;
		this.model = this.connection.model(modelName);
	}

	fetchMany(): Promise<T[]> {
		return this.model.find({}).lean().exec();
	}

	async fetchOne(id: number): Promise<T> {
		return await this.model.findById(id).then(doc => {
			return doc;
		})
	}

	async insert(data: T): Promise<{id: string}> {		
		const newModel = await this.model.create(data as T & Document);
		return { id: newModel.id }
	}

	async update(id: number, data: T): Promise<T> {
		return await this.model.findByIdAndUpdate(id, data).then(doc => {
			return doc;
		})
	}

	async delete(id: number): Promise<{id: number}> {
		return await this.model.findByIdAndDelete(id).then(status => {
			if(status) return { id }			
			return null
		})
	}

}