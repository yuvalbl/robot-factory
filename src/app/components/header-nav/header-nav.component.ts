import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {
  isRobotsSelected = true;

  constructor() {
  }

  ngOnInit() {
  }

  toggleSelect(type: string) {
    type === 'robot' ? this.isRobotsSelected = true : this.isRobotsSelected = false;
  }

}
