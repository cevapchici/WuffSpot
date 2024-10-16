import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DogParkService } from "./dogPark.service";
import { DogParkControllerBase } from "./base/dogPark.controller.base";

@swagger.ApiTags("dogParks")
@common.Controller("dogParks")
export class DogParkController extends DogParkControllerBase {
  constructor(protected readonly service: DogParkService) {
    super(service);
  }
}
