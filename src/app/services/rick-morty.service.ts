import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { myComponent } from '../interfaces/interfaces';
import { delay } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class RickMortyService {
  constructor( private http: HttpClient ) { }

  getCharacters = (page: number) => 
    this.http.get('https://rickandmortyapi.com/api/character?page=' + page)
      .toPromise()
      .then((data:any) => data['results'])

  getCharactersByName = (name: string) => 
    this.http.get('https://rickandmortyapi.com/api/character?name=' + name)
      .toPromise()
      .then(data => data['results'])


  getMenuOpts = () => this.http.get<myComponent[]>('/assets/data/menu-opts.json')


  getHeros = () => this.http.get<any[]>('/assets/data/heros.json')
    .pipe( delay( 1500) );
}
