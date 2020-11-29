import { initServer } from './app/app.server';

import { SugarSeller, SugarTypes } from "./app/entities/SugarSeller/SugarSeller.class"
import { FlourSeller, FlourTypes } from "./app/entities/FlourSeller/FlourSeller.class"
import { SugarBuyer } from "./app/entities/SugarBuyer/SugarBuyer.class"


const port: string = process.env.APP_PORT || '3001';
initServer(port);

//Deriverable 2 test snippet
function testBuyer() {
  const sugarSellerA = new SugarSeller("Sugar Seller A", 1000);
  const sugarSellerB = new SugarSeller("Sugar Seller B", 2000);
  const flourSellerA = new FlourSeller("FlourSellerA", 100);
  const sugarB = new SugarBuyer();

  sugarB.buy(sugarSellerA, 100, SugarTypes.Brown);

  // Must show an error in the IDE
  sugarB.buy(sugarSellerB, 2999, FlourTypes.Corn); //Argument of type FlourTypes.Corn is not assignable to parameter of type SugarType
  // Must show an error in the IDE
  sugarB.buy(flourSellerA, 100, SugarTypes.Brown); //Argument of type FlourSeller is not assignable to parameter of type SugarSeller
};
