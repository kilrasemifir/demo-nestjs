import { Injectable } from "@nestjs/common/decorators";

@Injectable()
export class CalculatriceService {

    addition(a: number, b:number): number {
        return a+b;
    }
}