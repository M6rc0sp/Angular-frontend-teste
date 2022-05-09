import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @HostBinding('class') className = '';

  toggleControl = new FormControl(false);

  constructor() { }

  ngOnInit(): void {
    this.toggleControl.valueChanges.subscribe(val => {
      let element = document.getElementById('main');
      if (element != null) {
        element.className = val ? 'darkMode' : ''
      }
      if (val) {
        document.body.style.backgroundColor = '#424242'
      } else {
        document.body.style.backgroundColor = '#fff'
      }
    });
  }

}
