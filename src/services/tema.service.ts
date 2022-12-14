import { HttpException, HttpStatus, Inject, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Tema } from "src/tema/entities/tema.entity";
import { DeleteResult, ILike, Repository } from "typeorm";

@Injectable()
export class TemaService{
    constructor(
        @InjectRepository(Tema)
        private TemaRepository: Repository<Tema>
    ){}

    async findAll (): Promise<Tema[]> {
       return await this.TemaRepository.find({
        relations: {
            postagem: true
        }
       });   
    }

    async findById (id: number): Promise<Tema> {

        let tema = await this.TemaRepository.findOne({
            where: {
                id
            },
            relations:{
                postagem: true
            }
        });
        if (!Tema)
        throw new HttpException('Tema não encontrado!' ,HttpStatus.NOT_FOUND);
        return tema; 
    }

    async findByDescricao (descricao: string): Promise <Tema[]>{
        return await this.TemaRepository.find({
            where: {
                descricao: ILike (`%${descricao}%`)
            },
        relations: {
            postagem: true
        }    
        })

    }
    async create (Tema: Tema): Promise<Tema>{
      return await this.TemaRepository.save(Tema);
    }

    async update (tema: Tema): Promise<Tema>{
        let buscaTema = await this.findById(tema.id);
        if(!buscaTema || !tema.id)
        throw new HttpException ('Tema não encontrado!',HttpStatus.NOT_FOUND)
        return await this.TemaRepository.save(tema)
    }

    async delete (id: number): Promise<DeleteResult>{
        let buscaTema = await this.findById(id);

        if (!buscaTema)
        throw new HttpException ('Tema não Encontrado!', HttpStatus.NOT_FOUND)
        return await this.TemaRepository.delete(id);

    }
    

}