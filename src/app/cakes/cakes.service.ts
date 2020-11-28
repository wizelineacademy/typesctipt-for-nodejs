import { Cake } from "./cakes.class";
import * as dbservice from "../services/db.service";
import { CakeBuilder } from "./cakes.builder";

export function saveCake(cake: Cake): boolean {
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
  let cake: Cake = new CakeBuilder().build();
  let result = dbservice.Get(id);
  return result;
}

export function getCakes(): Promise<Cake[]> {
  let cakes: Cake[] = [];
  let result = dbservice.GetAll();
  return result;
}
