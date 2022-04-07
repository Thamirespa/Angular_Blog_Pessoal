import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Tema } from '../model/Tema';
import { UsuarioLogin } from '../model/UsuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class TemaService {

  constructor(
    private http: HttpClient
  ) { }
token = {
  headers: new HttpHeaders().set('Authorization', environment.token)
}

postarTema(tema:Tema): Observable<Tema>{
  return this.http.post<Tema>('Http://localhost:8080/temas', tema , this.token)
}

getAllTema(): Observable<Tema[]>{
  return this.http.get<Tema[]>('Http://localhost:8080/temas', this.token)
}

getByIdTema(id: number): Observable<Tema>{
  return this.http.get<Tema>(`Http://localhost:8080/temas/${id}`, this.token)
}
putTema(tema: Tema): Observable<Tema>{
return this.http.put<Tema>('Http://localhost:8080/temas', tema, this.token)
}

deleteTema(id: number){
  return this.http.delete(`Http://localhost:8080/temas/${id}`, this.token)
}

}
