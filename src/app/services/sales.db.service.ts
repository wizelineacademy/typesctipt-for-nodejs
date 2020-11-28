import { Sell } from "../sales/sales.class";

let db: Sell[] = [];

function GetAll(): Promise<Sell[]> {
  let promise = new Promise<Sell[]>(function (resolve, reject) {
    setTimeout(() => {
      resolve(db);
    }, Math.random() * 3);
  });
  return promise;
}

function Insert(item: Sell): Promise<boolean> {
  item.id = db.length + 1;
  let promise = new Promise<boolean>(function (resolve, reject) {
    setTimeout(() => {
      db.push(item);
      resolve(true);
    }, Math.random() * 3);
  });
  return promise;
}

export { GetAll, Insert };
