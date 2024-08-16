import { Component, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IProjects } from '../../interface/IProjects.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public arrayProjects = signal<IProjects[]>([
    {
      src: "assets/img/uflajr.png",
      alt: 'Site Institucional - UFLA Júnior',
      title: 'UFLA Júnior',
      width: '63px',
      height: '50px',
      description: 'Explore o fascinante site insticucional realizado para a empresa júnior UFLA Jr.',
      links: [
        {
          name: 'Conheça o Site',
          href: 'https://uflajunior.com'
        },
      ],
    },
    {
      src: "assets/img/uflajr.png",
      alt: 'Protótipo - E-educa',
      title: 'E-Educa',
      width: '63px',
      height: '50px',
      description: 'Explore a fascinante prototipagem realizada para a empresa E-Educa.',
      links: [
        {
          name: 'Conheça o Site',
          href: 'https://aplicaprova-f3d36.web.app'
        },
      ],
    },
    {
      src: "assets/img/uflajr.png",
      alt: 'Site Institucional - UFLA Júnior',
      title: 'UFLA Júnior',
      width: '63px',
      height: '50px',
      description: 'Explore o fascinante site insticucional realizado para a empresa júnior UFLA Jr.',
      links: [
        {
          name: 'Conheça o Site',
          href: 'https://uflajunior.com'
        },
      ],
    },
    {
      src: "assets/img/uflajr.png",
      alt: 'Site Institucional - UFLA Júnior',
      title: 'UFLA Júnior',
      width: '63px',
      height: '50px',
      description: 'Explore o fascinante site insticucional realizado para a empresa júnior UFLA Jr.',
      links: [
        {
          name: 'Conheça o Site',
          href: 'https://uflajunior.com'
        },
      ],
    },
    {
      src: "assets/img/uflajr.png",
      alt: 'Site Institucional - UFLA Júnior',
      title: 'UFLA Júnior',
      width: '63px',
      height: '50px',
      description: 'Explore o fascinante site insticucional realizado para a empresa júnior UFLA Jr.',
      links: [
        {
          name: 'Conheça o Site',
          href: 'https://uflajunior.com'
        },
      ],
    },
    {
      src: "assets/img/uflajr.png",
      alt: 'Site Institucional - UFLA Júnior',
      title: 'UFLA Júnior',
      width: '63px',
      height: '50px',
      description: 'Explore o fascinante site insticucional realizado para a empresa júnior UFLA Jr.',
      links: [
        {
          name: 'Conheça o Site',
          href: 'https://uflajunior.com'
        },
      ],
    },
  ]);
}
