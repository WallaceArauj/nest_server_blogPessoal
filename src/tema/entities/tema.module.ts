import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Tema } from "./tema.entity";


@Module({
    imports: [TypeOrmModule.forFeature([Tema])],
    controllers: [],
    providers: [],
    exports: [TypeOrmModule]
})
export class TemaModule {}