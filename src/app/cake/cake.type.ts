import { Status as CakeStatus} from './cake-status.enum'

export interface Cake {
  id: number
	name: string
  descrition: string
  ingredients: string[]
  price: number
  stock: number
  status: CakeStatus
}