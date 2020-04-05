import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Joke, JokeResponse} from '../../model/joke';


@Injectable({
  providedIn: 'root'
})
export class JokesService {

  constructor(private httpClient: HttpClient) {
  }

  getJoke() {
    return this.httpClient.get<JokeResponse>('http://api.icndb.com/jokes/random');

  }
}

