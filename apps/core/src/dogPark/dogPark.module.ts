import { Module } from "@nestjs/common";
import { DogParkModuleBase } from "./base/dogPark.module.base";
import { DogParkService } from "./dogPark.service";
import { DogParkController } from "./dogPark.controller";
import { DogParkResolver } from "./dogPark.resolver";

@Module({
  imports: [DogParkModuleBase],
  controllers: [DogParkController],
  providers: [DogParkService, DogParkResolver],
  exports: [DogParkService],
})
export class DogParkModule {}
