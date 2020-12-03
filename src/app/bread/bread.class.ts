import { dbMain } from "../app.database";
import { IBread } from "./bread.interface";
import { BreadService } from "./bread.service";

export type BreadInjection = {
  breadService?: BreadService;
}

export class Bread implements IBread {
  private breadService: BreadService;
  _id: string;
  name: string;
  icon: string;

  constructor(values?: IBread, injection?: BreadInjection) {
    this.setValues(values);
    this.breadService = injection?.breadService || new BreadService(dbMain);
  }

  get values(): IBread {
    return {
      name: this.name,
      icon: this.icon
    }
  }

  set values(values: IBread) {
    this.setValues(values);
  }

  public async save() {
    this.validateName();
    this.validateIcon();
    this._id = await this.breadService.save(this.values);
    return this._id;
  }

  private setValues(values: IBread) {
    if (values) {
      this.name = values.name;
      this.icon = values.icon;
    }
  }

  public validateIcon() {
    const minLength = 1;
    const maxLength = 1;
    const hasValue = !(this.name == null || undefined);
    const minLengthInvalid = this.name.length < minLength;
    const maxLengthInvalid = this.name.length > maxLength;

    if (hasValue) {
      if (minLengthInvalid || maxLengthInvalid) {
        throw new Error(`Icon can only contain ${maxLength} character.`);
      }
    }
  }

  public validateName() {
    const minLength = 3;
    const maxLength = 50;
    const hasNoValue = this.name == null || undefined;
    const minLengthInvalid = this.name.length < minLength;
    const maxLengthInvalid = this.name.length > maxLength;

    if (hasNoValue) {
      throw new Error('Name cannot be empty.');
    }
    if (minLengthInvalid) {
      throw new Error(`Name cannot have less than ${minLength} characters.`);
    }
    if (maxLengthInvalid) {
      throw new Error(`Name cannot have more than ${maxLength} characters.`);
    }
  }
}
