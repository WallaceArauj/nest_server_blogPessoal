import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Postagem } from "src/postagem/entities/postagem.entity";
import { Repository } from "typeorm";

@Injectable()
export class PostagemService {

    constructor(
        @InjectRepository(Postagem)
        private postagemRepository: Repository<Postagem> //assíncrona
    ) { }

    async findAll(): Promise<Postagem[]> {
        return await this.postagemRepository.find()
    }

}
