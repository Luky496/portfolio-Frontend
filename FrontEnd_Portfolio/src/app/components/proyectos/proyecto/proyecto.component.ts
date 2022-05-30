import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.css'],
})
export class ProyectoComponent implements OnInit {
  proyectos = [
    {
      name: 'Argentina Programa',
      picture:
        'https://www.nono.gob.ar/wp-content/uploads/2021/09/WhatsApp-Image-2021-09-07-at-6.21.25-PM-2048x1024.jpeg',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ratione, libero a. Amet reprehenderit quidem qui unde, illum ratione autem dolor nemo neque   dolores et vitae repellendus, assumenda, repellat minus. Iure.',
      github: '',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
