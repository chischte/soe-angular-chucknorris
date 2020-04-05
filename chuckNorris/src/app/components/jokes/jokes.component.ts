import {Component, OnInit} from '@angular/core';
import {JokesService} from '../../services/jokes.service';
import {JokeResponse} from '../../../model/joke';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class JokesComponent implements OnInit {

  constructor(private jokesService: JokesService) {

  }

  jokeResponse: JokeResponse;

  ngOnInit(): void {
  }

  loadJoke() {
    this.jokesService.getJoke()
      .subscribe((jokeResponse: JokeResponse) => {
        this.jokeResponse = {...jokeResponse};
      });
  }
}
