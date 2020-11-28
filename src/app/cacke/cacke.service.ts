import data  from "../../utils/mock.cacke";
import { Cacke } from "../model/cacke/cacke";

export const getCacke = (): Promise<Cacke> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(data);
        }, 1000);
  });
}

export const postCacke = (cacke): Promise<number> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        //Do the DB save and if everything is good then it sends the id of the new record
        if (cacke) {
            resolve(cacke);
        } else {
            reject();
        }
        }, 1000);
    });
}

export const getCackeById = (id): Promise<Cacke> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (id) {
           resolve(data[0]);
        }
      }, 1000);
    });
}

export const updateCacke = (id): Promise<number> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (id) {
           //Here it will go the update part
           resolve(1);
        }
      }, 1000);
    });
}