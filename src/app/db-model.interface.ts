import { IModel } from "./model.interface";

export interface IDBModel {
    save(): Promise<IModel>;
    get(): Promise<IModel[]>;
    getById(id: string): Promise<IModel>;
    remove(id: string): Promise<IModel>;
    patch(id: string, model: IModel): Promise<IModel>;
}