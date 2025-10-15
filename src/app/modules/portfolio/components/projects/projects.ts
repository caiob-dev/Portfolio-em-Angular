import { Component, inject, signal } from '@angular/core';
import { IProjects } from '../../interface/Projects.interface';

import {MatDialog, MatDialogModule} from '@angular/material/dialog';

import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';

import { DialogProjects } from '../dialog/dialog-projects/dialog-projects';

@Component({
  selector: 'app-projects',
  imports: [MatDialogModule],
  templateUrl: './projects.html',
  styleUrl: './projects.scss'
})
export class Projects {
  #dialogRef = inject(MatDialog)

  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/projects/drums.png',
      alt: 'icone do projeto',
      title: 'Projeto Drums',
      width: '140px',
      height: '90px',
      description: '<p>Projeto aprendido durante o curso FullStack turbo da TipsCode. <p>Projeto onde é possível tocar bateria com o teclado e sai o som de acordo com cada instrumento.</p> </p>',
      links: [{
        name: 'Conheça o projeto',
        href: 'https://drums-project-three.vercel.app/'
      }]
    },

    {
      src: 'assets/img/projects/dice.png',
      alt: 'icone do projeto',
      title: 'Projeto jogo de dados',
      width: '120px',
      height: '75px',
      description: '<p>Projeto aprendido durante o curso FullStack turbo da TipsCode. <p>Projeto onde é possível jogar dados e descobrir quem ganhou.</p> </p>',
      links: [{
        name: 'Conheça o projeto',
        href: 'https://dice-game-seven-weld.vercel.app/'
      }]
    },

    {
      src: 'assets/img/projects/react-native.png',
      alt: 'icone do projeto',
      title: 'Projeto de extensão da faculdade',
      width: '110px',
      height: '90px',
      description: '<p>Projeto FilmesFlix App <p>Aplicativo mobile desenvolvido para projeto de extensão universitária, focado em demonstrar ciência no conteúdo da matéria</p> <p>Tecnologia usada: React Native, Expo, Android Studio, Node.js.</p> <p>O código está no GitHub.</p> </p>',
      links: [
        {
        name: 'Conheça o projeto',
        href: 'https://github.com/caiob-dev/Projeto-FilmesPrime-Faculdade' 
      }]
    },

    {
      src: 'assets/img/projects/to-do-list.png',
      alt: 'icone do projeto',
      title: 'Projeto tal',
      width: '110px',
      height: '90px',
      description: '<p>Projeto aprendido durante o curso FullStack turbo da TipsCode. <p>Projeto onde é possível realizar anotações, seja de coisas importantes ou checklists.</p> </p>',
      links: [{
        name: 'Conheça o projeto',
        href: 'https://third-react-app.vercel.app/'
      }]
    },

    {
      src: 'assets/img/projects/emoji.png',
      alt: 'icone do projeto',
      title: 'Projeto tal',
      width: '110px',
      height: '90px',
      description: '<p>Projeto aprendido durante o curso FullStack turbo da TipsCode. <p>Projeto básico, que me ajudou a consolidar o recurso de map do React.</p> </p>',
      links: [{
        name: 'Conheça o projeto',
        href: 'https://emojipedia-liard-three.vercel.app/' 
      }]
    },

    {
      src: 'assets/img/projects/project.png',
      alt: 'icone do projeto',
      title: 'Projeto VSL',
      width: '120px',
      height: '80px',
      description: '<p>Projeto sobre programação em VSL (Video Sales Letter).  </p>',
      links: [{
        name: 'Conheça o projeto',
        href: 'https://projeto-vsl.vercel.app/'
      }]
    },

    {
      src: 'assets/img/projects/git.png',
      alt: 'icone do projeto',
      title: 'GitHub',
      width: '140px',
      height: '70px',
      description: '<p>Meu GitHub para saber todos os meu projetos e o que ando aprendendo...</p>',
      links: [{
        name: 'Conheça o meu GitHub!',
        href: 'https://github.com/caiob-dev'
      }]
    },

     {
      src: 'assets/img/projects/vercel.png',
      alt: 'icone do projeto',
      title: 'Vercel',
      width: '120px',
      height: '40px',
      description: '<p>Meu Vercel onde eu hospedo alguns projetos! Fique ligado!</p>',
      links: [{
        name: 'Conheça o meu Vercel!',
        href: 'https://vercel.com/caios-projects-dc5af49f'
      }]
    },

  ])

  public openDialog(data: IProjects) {
    this.#dialogRef.open(DialogProjects, {
      data,
      panelClass: EDialogPanelClass.PROJECTS // cria no enum para caso tenha varios panelClass, não se confunda
    })
  }
}
