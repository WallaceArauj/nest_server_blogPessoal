import { Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Tema } from "src/tema/entities/tema.entity";
import { Repository } from "typeorm";

@Injectable()
export class TemaService{
    constructor(
        @InjectRepository(Tema)
        private TemaRepository: Repository<Tema>
    ){}

    async findAll (): Promise<Tema[]> {
       return await this.TemaRepository.find()   
    }

}