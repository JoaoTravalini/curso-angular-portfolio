import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: "Fullstack Developer",
        p: 'AsimovJr | Ago 2024 - Present',
      },
      text: "Desde Agosto de 2024, atuo como Desenvolvedor Web na AsimovJr | HTML5 | CSS3 | Typescript | Angular",
    },
    {
      summary: {
        strong: "Gerente de Sites & Protótipos",
        p: 'AsimovJr | Jan 2024 - Jul 2024',
      },
      text: "De Janeiro a Julho de 2024 atuei como gerente de Sites & Protótipos na AsimovJr | Wordpress | Figma",
    },
    {
      summary: {
        strong: "Estágio técnico em Eletrônica",
        p: 'EletroDenis | Fev 2022 - Set 2022',
      },
      text: "De Janeiro a Setembro de 2022 atuei como estagiário na EletroDenis, uma empresa de manutenção de equipamentos eletrônicos | Televisão | Caixas de som",
    },
  ]);
}