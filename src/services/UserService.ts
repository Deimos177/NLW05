import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepository } from "../repositories/UsersRepository";

class UsersService{
  private usersRepository: Repository<User>

  constructor(){
    this.usersRepository = getCustomRepository(UsersRepository)
  }
  async create(email: string){
    const userExists = await this.usersRepository.findOne({ 
      email 
    })


    if(userExists){
      return userExists
    }

    if(email.length == 0){
      throw new Error("Email must be filled")
    }

    const user = this.usersRepository.create({ 
      email 
    })

    await this.usersRepository.save(user)

    return user
  }

  async findByEmail(email: string){
    const user = this.usersRepository.findOne({ email })

    if(!user){
      return null
    }

    return user
  }
}

export { UsersService };
