import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit() {
  }

  onSub( frm : NgForm) {
    console.log(`Submitted ${new Date()}`)
    console.log(frm.value)

    this.router.navigate(['admin',frm.value.eml])
  }
}
