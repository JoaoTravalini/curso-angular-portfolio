import { Component, signal, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { IProjects } from '../../interface/IProjects.interface';

import { MatDialog, MatDialogModule } from '@angular/material/dialog'

import { EdialogPanelClass } from '../../enum/EDialogPanelClass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  #dialog = inject(MatDialog);

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

  public openDialog(data: IProjects){
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EdialogPanelClass.PROJECTS
    })
  }
}
