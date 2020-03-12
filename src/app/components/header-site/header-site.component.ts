import { Component, OnInit } from '@angular/core';
import { Globals } from '../../globals';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header-site',
  templateUrl: './header-site.component.html',
  styleUrls: ['./header-site.component.css']
})
export class HeaderSiteComponent implements OnInit {
  globals:Globals;

  constructor(
    private router: Router,
    globals:Globals
  ){
    this.globals = globals;
  }

  ngOnInit() {
  }

  logout(){
    this.router.navigate(['/login']);
    this.globals.logged = false;
  }
}
