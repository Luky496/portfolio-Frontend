import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  constructor() {}
  skills = [
    {
      id: 0,
      nombre: 'comunicacion',
      foto: 'https://cdn.pixabay.com/photo/2018/09/23/08/19/social-media-3696899_960_720.png',
      porcentaje: 50,
    },
    {
      id: 1,
      nombre: 'angular',
      foto: 'https://w7.pngwing.com/pngs/14/568/png-transparent-angularjs-logo-javascript-security-token-angle-triangle-logo.png',
      porcentaje: 50,
    },
    {
      id: 0,
      nombre: 'comunicacion',
      foto: 'https://cdn.pixabay.com/photo/2018/09/23/08/19/social-media-3696899_960_720.png',
      porcentaje: 50,
    },
    {
      id: 1,
      nombre: 'angular',
      foto: 'https://w7.pngwing.com/pngs/14/568/png-transparent-angularjs-logo-javascript-security-token-angle-triangle-logo.png',
      porcentaje: 50,
    },
    {
      id: 0,
      nombre: 'comunicacion',
      foto: 'https://cdn.pixabay.com/photo/2018/09/23/08/19/social-media-3696899_960_720.png',
      porcentaje: 50,
    },
    {
      id: 1,
      nombre: 'angular',
      foto: 'https://w7.pngwing.com/pngs/14/568/png-transparent-angularjs-logo-javascript-security-token-angle-triangle-logo.png',
      porcentaje: 50,
    },
  ];
  ngOnInit(): void {}
}
