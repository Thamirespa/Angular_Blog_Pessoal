import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { TemaService } from '../service/tema.service';
import { Tema } from '../model/Tema';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-tema',
  templateUrl: './tema.component.html',
  styleUrls: ['./tema.component.css']
})
export class TemaComponent implements OnInit {
  tema: Tema = new Tema();
  listaTema: Tema[];

  constructor(
    private temaService: TemaService,
   private router: Router
  
  ) { }

  ngOnInit() {

    if(environment.token == ''){
      alert('Sua sessão expirou, faça o login novamente ')
      this.router.navigate(['/entrar'])
    }

    this.findAllTema()
  }

  cadastrarTema(){
    this.temaService.postarTema(this.tema).subscribe((resp: Tema)=>{
      this.tema=resp
      alert('Tema cadastrtado com sucesso')
      this.findAllTema();
      this.tema = new Tema
    })
  }

findAllTema(){
  this.temaService.getAllTema().subscribe((resp:Tema[])=>{
    this.listaTema = resp
    
  })
}



}
