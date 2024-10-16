import * as graphql from "@nestjs/graphql";
import { DogParkResolverBase } from "./base/dogPark.resolver.base";
import { DogPark } from "./base/DogPark";
import { DogParkService } from "./dogPark.service";

@graphql.Resolver(() => DogPark)
export class DogParkResolver extends DogParkResolverBase {
  constructor(protected readonly service: DogParkService) {
    super(service);
  }
}
