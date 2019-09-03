import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  heros: { id: number; first_name: string; last_name: string; age: string; designation: string; }[];

  constructor() { }

  ngOnInit() {
    this.heros = [{
      id: 1,
      first_name: 'Dheeraj',
      last_name: 'Jaiswal',
      age: '30',
      designation: 'Frontend Developer'
    }, {
        id: 11,
        first_name: 'Uday',
        last_name: 'Singh',
        age: '31',
        designation: 'Backend Developer'
      }, {
        id: 2,
        first_name: 'Manish',
        last_name: 'Jha',
        age: '31',
        designation: 'Frontend Developer'
      },
      {
        id: 3,
        first_name: 'Himanshu',
        last_name: 'Rawat',
        age: '32',
        designation: 'Backend Developer'
      },
      {
        id: 4,
        first_name: 'Abhinav',
        last_name: 'Saxena',
        age: '35',
        designation: 'QA'
      },
      {
        id: 5,
        first_name: 'Amit',
        last_name: 'Jeswani',
        age: '40',
        designation: 'Scrum Master'
      }];
  }

}
