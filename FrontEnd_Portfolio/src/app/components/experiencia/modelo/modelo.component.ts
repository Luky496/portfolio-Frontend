import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modelo',
  templateUrl: './modelo.component.html',
  styleUrls: ['./modelo.component.css'],
})
export class ModeloComponent implements OnInit {
  async getExperience() {
    let response = fetch('http://localhost:8080/experiencia/findAll');
    let data = await (await response).json();
    this.experiencias = [];
    data.forEach((data: any) => {
      const e = {
        id: data.idExp,
        titulo: data.títuloExp,
        date: data.fechaExp,
        description: data.descExp,
        Image: data.imagenExp,
      };
      this.experiencias.push(e);
    });
  }
  experiencias = [
    {
      id: '',
      titulo: '',
      date: '',
      description: '',
      Image: '',
    },
  ];

  constructor() {
    this.getExperience();
  }

  ngOnInit(): void {}
}
