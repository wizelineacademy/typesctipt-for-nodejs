import { Cake } from "../cakes/cakes.class";

let db: Cake[] = [];
function Get(index: number): Promise<Cake> {
  let promise = new Promise<Cake>(function (resolve, reject) {
    setTimeout(() => {
      console.log("Getting: ", db[index - 1]);
      resolve(db[index]);
    }, Math.random() * 3);
  });
  return promise;
}
function GetAll(): Promise<Cake[]> {
  let promise = new Promise<Cake[]>(function (resolve, reject) {
    setTimeout(() => {
      resolve(db);
    }, Math.random() * 3);
  });
  return promise;
}

function Insert(item: Cake): Promise<boolean> {
  item.id = db.length + 1;
  let promise = new Promise<boolean>(function (resolve, reject) {
    setTimeout(() => {
      db.push(item);
      resolve(true);
    }, Math.random() * 3);
  });
  return promise;
}
function Update(index: number, item: Cake): Promise<boolean> {
  let promise = new Promise<boolean>(function (resolve, reject) {
    setTimeout(() => {
      db[index] = item;
      resolve(true);
    }, Math.random() * 3);
  });
  return promise;
}

export { Get, GetAll, Update, Insert };
