
import { ICacke } from "../../../cacke/interfaces/cacke";

export interface IResponseData {
    message: string;
    data: ICacke | string | number | ICacke[];
}
