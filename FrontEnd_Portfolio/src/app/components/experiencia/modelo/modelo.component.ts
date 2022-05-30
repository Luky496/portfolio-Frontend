import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modelo',
  templateUrl: './modelo.component.html',
  styleUrls: ['./modelo.component.css'],
})
export class ModeloComponent implements OnInit {
  //traer datos del back
  experiencias = [
    {
      id: 0,
      titulo: 'poder judicial',
      date: '2018-2022',
      description: 'chicharito hernandez',
      Image:
        'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/ab/85/aa/cabildo-por-fuera.jpg?w=1200&h=1200&s=1',
    },

    // {
    //   id: 0,
    //   titulo: 'poder judicial 2',
    //   date: '2018-2020',
    //   description: 'el bichooo',
    //   Image:
    //     'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/ab/85/aa/cabildo-por-fuera.jpg?w=1200&h=1200&s=1',
    // },
    // {
    //   id: 0,
    //   titulo: 'poder judicial 2',
    //   date: '2018-2020',
    //   description: 'el bichooo',
    //   Image:
    //     'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/ab/85/aa/cabildo-por-fuera.jpg?w=1200&h=1200&s=1',
    // },
    // {
    //   id: 0,
    //   titulo: 'poder judicial 2',
    //   date: '2018-2020',
    //   description: 'el bichooo',
    //   Image:
    //     'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/11/ab/85/aa/cabildo-por-fuera.jpg?w=1200&h=1200&s=1',
    // },
  ];
  constructor() {}

  ngOnInit(): void {}
}
