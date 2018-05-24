import { JokeService } from './joke.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers :[JokeService]
})
export class AdminComponent implements OnInit {

  adNm: string = 'default'
  punchLine  : string
  joke : string

  constructor(
    private actRt: ActivatedRoute,
    private jk : JokeService
  ) { }

  ngOnInit() {
    console.log(this.actRt)

    this.actRt.params.subscribe(
      prm => {
        this.adNm = prm['eml']
      }
    )
  }
  crackJoke() {
    this.jk.randomJoke().subscribe(
      res => {
        this.punchLine = res['punchline']
        this.joke = res['setup']
      }
    ) 
  }
}

class Car {

  spd = 10
  speedUp() {
    this.spd = 56
  }
}
let c = new Car()
c.speedUp()