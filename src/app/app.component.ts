import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators ,FormsModule,NgForm } from '@angular/forms';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
      localStorage.setItem('useStubbedData',  'false');
    }
}
