import { Cake } from "./cakes.class";
import * as dbservice from "../services/cake.db.service";
import { CakeBuilder } from "./cakes.builder";

export function saveCake(cake: Cake): boolean {
  //TODO: Fix this promise
  let resultPromise: Promise<unknown>;
  let success: boolean = false;
  if (cake.id == 0) {
    resultPromise = dbservice.Insert(cake);
  } else {
    resultPromise = dbservice.Update(cake.id, cake);
  }
  resultPromise.then((result) => {
    success = result === true;
  });
  return true;
}

export function getCake(id: number): Promise<Cake> {
  let result = dbservice.Get(id);
  return result;
}

export function getCakes(): Promise<Cake[]> {
  let cakes: Cake[] = [];
  let result = dbservice.GetAll();
  return result;
}
