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
  emoji: string;

  constructor(values?: IBread, injection?: BreadInjection) {
    this.setValues(values);
    this.breadService = injection?.breadService || new BreadService(dbMain);
  }

  get values(): IBread {
    return {
      name: this.name,
      emoji: this.emoji
    }
  }

  set values(values: IBread) {
    this.setValues(values);
  }

  public async save() {
    this.validateName();
    this.validateEmoji();
    this._id = await this.breadService.save(this.values);
    return this._id;
  }

  private setValues(values: IBread) {
    if (values) {
      this.name = values.name;
      this.emoji = values.emoji;
    }
  }

  public validateEmoji(): Boolean {
    const minLength: number = 1;
    const maxLength: number = 2;
    const hasValue: boolean = !(this.emoji == null || undefined);
    const minLengthInvalid: boolean = this.emoji?.length < minLength;
    const maxLengthInvalid: boolean = this.emoji?.length > maxLength;

    if (hasValue) {
      if (minLengthInvalid || maxLengthInvalid) {
        throw new Error(`Emoji can only contain ${maxLength} character.`);
      }
    }
    return true;
  }

  public validateName(): Boolean {
    const minLength: number = 3;
    const maxLength: number = 50;
    const hasNoValue: boolean = this.name == null || undefined;
    const minLengthInvalid: boolean = this.name?.length < minLength;
    const maxLengthInvalid: boolean = this.name?.length > maxLength;

    if (hasNoValue) {
      throw new Error('Name cannot be empty.');
    }
    if (minLengthInvalid) {
      throw new Error(`Name cannot have less than ${minLength} characters.`);
    }
    if (maxLengthInvalid) {
      throw new Error(`Name cannot have more than ${maxLength} characters.`);
    }
    return true;
  }
}
