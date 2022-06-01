import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css'],
})
export class SkillsComponent implements OnInit {
  async getSkills() {
    let response = fetch('http://localhost:8080/skill/findAll');
    let data = await (await response).json();
    this.skills = [];
    data.forEach((data: any) => {
      const e = {
        id: data.idSkills,
        nombre: data.nombreSkills,
        foto: data.fotoSkills,
        porcentaje: data.porcentaje,
      };
      this.skills.push(e);
    });
  }
  constructor() {
    this.getSkills();
  }
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
