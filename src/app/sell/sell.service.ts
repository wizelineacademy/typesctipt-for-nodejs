import { Sell } from './sell.type';
import { DataService } from '../../components/data-service.component';
import { Connection } from 'mongoose';

export class SellService {
	private dataService: DataService<Sell>;

	constructor(connection: Connection) {
		this.dataService = new DataService(connection, 'cake');
	}

	getMany(): Promise<Sell[]> {
		return this.dataService.fetchMany();
	}

	getOne(id: number): Promise<Sell> {
		return this.dataService.fetchOne(id);
	}

	update(id: number, newData: Sell): Promise<Sell> {
		return this.dataService.update(id, newData);
	}

	makeSell(newData: Sell): Promise<{id: string}> {
		return this.dataService.insert(newData);
	}

	delete(id: number): Promise<{id: number}> {
		return this.dataService.delete(id);
	}
}