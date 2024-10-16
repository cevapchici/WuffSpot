import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DogParkServiceBase } from "./base/dogPark.service.base";

@Injectable()
export class DogParkService extends DogParkServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
