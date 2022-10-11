import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PostagemContoller } from "src/controllers/postagem.controller";
import { PostagemService } from "src/services/postagem.service";
import { Postagem } from "./postagem.entity";

@Module({
    imports: [TypeOrmModule.forFeature([Postagem])],
    providers: [PostagemService],
    controllers: [PostagemContoller],
    exports: [TypeOrmModule]
})
export class PostagemModule { }