import { Controller, Get, Query } from '@nestjs/common';
import { CalculatriceService } from './calculatrice.service';

@Controller('calculatrice')
export class CalculatriceController {

    constructor(private calculaticeService: CalculatriceService){}

    @Get("addition")
    addition(@Query("a") a: string, @Query("b") b: string){
        return this.calculaticeService.addition(
            Number.parseInt(a),
            Number.parseInt(b)
        )
    }


}
