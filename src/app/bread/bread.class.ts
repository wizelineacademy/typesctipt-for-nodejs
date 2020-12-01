import { IBread } from "./bread.interface";

export class Bread implements IBread {
  name: string;
  icon: string;

  get values(): IBread {
    return {
      name: this.name,
      icon: this.icon
    }
  }

  set values(values: IBread) {
    if (values) {
      this.name = values.name;
      this.icon = values.icon;
    }
  }
}
