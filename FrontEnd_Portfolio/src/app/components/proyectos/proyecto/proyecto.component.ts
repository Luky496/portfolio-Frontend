import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css'],
})
export class ProyectoComponent implements OnInit {
  async getProyectos() {
    let response = fetch('http://localhost:8080/proyectos/findAll');
    let data = await (await response).json();
    this.proyectos = [];
    data.forEach((data: any) => {
      const e = {
        id: data.idPro,
        name: data.namePro,
        picture: data.picturePro,
        github: data.githubPro,
        description: data.descPro,
        date: data.datePro,
      };
      this.proyectos.push(e);
    });
  }
  proyectos = [
    {
      name: '',
      picture: '',
      description: '',
      github: '',
      date: '',
    },
  ];

  constructor() {
    this.getProyectos();
  }

  ngOnInit(): void {}
}
