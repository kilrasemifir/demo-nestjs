import { Controller, Get, Post, Param, Query, Body, Response } from '@nestjs/common';
import { AppService } from './app.service';
import { Utilisateur } from './utilisateur/entities/utilisateur.entity';
import { UtilisateurPipe } from './utilisateur/pipes/utilisateur.pipe';
import { UtilisateurService } from './utilisateur/services/utilisateur.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private utilisateurService: UtilisateurService
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("/salutation")
  getSalutation(){
    return "Salutation";
  }

  @Post()
  post(){
    return "POST";
  }

  /**
   * GET message/salutation
   * @return SALUTATION
   */
  @Get("message/:message")
  getParamMessage(@Param("message") message: string){
    return message.toUpperCase();
  }

  @Get("/query")
  getQuery(@Query("a") a: string ){
    return a+1;
  }

  @Get("/queries")
  getQueries(@Query() query: any){
    return query;
  }

  @Post("/message")
  postMessage(@Body() message: {message: string}){
    return message;
  }

  @Get("count")
  getUtilisateruCount(){

  }

  @Post("demo")
  postDemo(@Body(UtilisateurPipe) body: Utilisateur){
    console.log(body);
  }
}
