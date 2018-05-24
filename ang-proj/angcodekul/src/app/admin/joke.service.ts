import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable()
export class JokeService {

  readonly url = 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke'

  constructor(
    private http : HttpClient
  ) { }

  randomJoke() {
    return this.http.get(this.url);
  }
}
