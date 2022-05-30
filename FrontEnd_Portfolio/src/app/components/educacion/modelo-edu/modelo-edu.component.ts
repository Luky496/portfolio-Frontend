import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modelo-edu',
  templateUrl: './modelo-edu.component.html',
  styleUrls: ['./modelo-edu.component.css'],
})
export class ModeloEduComponent implements OnInit {
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
  constructor() {}

  ngOnInit(): void {}
}
