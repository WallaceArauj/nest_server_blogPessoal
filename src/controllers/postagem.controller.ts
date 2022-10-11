import { Controller, Get, HttpCode, HttpStatus } from "@nestjs/common";
import { Postagem } from "src/postagem/entities/postagem.entity";
import { PostagemService } from "src/services/postagem.service";


@Controller()
export class PostagemContoller {

    constructor(private readonly postagemService: PostagemService) { }

    @Get('/postagem')
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Postagem[]> {
        return this.postagemService.findAll()
    }
}