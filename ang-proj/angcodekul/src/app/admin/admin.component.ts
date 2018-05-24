import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  adNm: string = 'default'

  constructor(
    private actRt: ActivatedRoute
  ) { }

  ngOnInit() {
    console.log(this.actRt)

    this.actRt.params.subscribe(
      prm => {
        this.adNm = prm['eml']
      }
    )
  }
}
