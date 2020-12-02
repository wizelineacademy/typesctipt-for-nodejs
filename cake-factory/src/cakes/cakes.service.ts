import { Connection } from 'mongoose'
import DataService from '../components/data-service.components'
import schema from './cake.model'
import Icake from './cakes.interface'

class CakeService {
  private dbService: DataService<Icake>

  constructor(conn: Connection) {
    this.dbService = new DataService(conn, 'Cake')
  }

  getAll() {
    return this.dbService.fetchMany()
  }

  create(cake: Icake) {
    return this.dbService.insert(cake)
  }

}

export default CakeService
