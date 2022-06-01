import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modelo-edu',
  templateUrl: './modelo-edu.component.html',
  styleUrls: ['./modelo-edu.component.css'],
})
export class ModeloEduComponent implements OnInit {
  async getExperience() {
    let response = fetch('http://localhost:8080/educacion/findAll');
    let data = await (await response).json();
    this.experiencias = [];
    data.forEach((data: any) => {
      const e = {
        id: data.idEdu,
        titulo: data.títuloEdu,
        date: data.fechaEdu,
        description: data.descEdu,
        Image: data.imagenEdu,
      };
      this.experiencias.push(e);
    });
    console.log(this.experiencias);
  }

  experiencias = [
    {
      id: 0,
      titulo: 'Primario',
      date: '2018-2022',
      description: 'chicharito hernandez',
      Image:
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/ab/85/aa/cabildo-por-fuera.jpg?w=1200&h=1200&s=1',
    },
    {
      id: 0,
      titulo: 'Secundario',
      date: '2018-2022',
      description: 'chicharito hernandez',
      Image:
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/ab/85/aa/cabildo-por-fuera.jpg?w=1200&h=1200&s=1',
    },
    {
      id: 0,
      titulo: 'Facultad',
      date: '2018-2022',
      description: 'chicharito hernandez',
      Image:
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/ab/85/aa/cabildo-por-fuera.jpg?w=1200&h=1200&s=1',
    },
  ];
  constructor() {
    this.getExperience();
  }

  ngOnInit(): void {}
}
