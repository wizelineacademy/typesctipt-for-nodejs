import { DataService } from '../../components/data-service.component';
import { Connection } from 'mongoose';
import { Cake } from './cake.type';

export class CakeService {
	private dataService: DataService<Cake>;

	constructor(connection: Connection) {
		this.dataService = new DataService(connection, 'cake');
	}

	getMany(): Promise<Cake[]> {
		return this.dataService.fetchMany();
	}

	getOne(id: number): Promise<Cake> {
		return this.dataService.fetchOne(id);
	}

	update(id: number, newData: Cake): Promise<Cake> {
		return this.dataService.update(id, newData);
	}

	makeCake(newData: Cake): Promise<Cake> {
		return this.dataService.insert(newData);
	}

	delete(id: number): Promise<Cake> {
		return this.dataService.delete(id);
	}
}