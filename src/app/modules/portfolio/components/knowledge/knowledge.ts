import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/Knowledge.interface';

@Component({
  selector: 'app-knowledge',
  imports: [],
  templateUrl: './knowledge.html',
  styleUrl: './knowledge.scss'
})
export class Knowledge {
 public arrayKnowledge = signal<IKnowledge[]>([
    {
      src:'assets/icons/knowledge/html5.svg',
      alt:'icone html',
      label: "Html 5"
    },
    {
      src:'assets/icons/knowledge/css3.svg',
      alt:'icone css3',
      label: "Css3"
    },

    {
      src:'assets/icons/knowledge/javascript.svg',
      alt:'icone javascript',
      label: "JavaScript"
    },

    {
      src:'assets/icons/knowledge/typescript.svg',
      alt:'icone typescript',
      label: "Typescript"
    },

    {
      src:'assets/icons/knowledge/react.svg',
      alt:'icone react',
      label: "React"
    },

    {
      src:'assets/icons/knowledge/angular.svg',
      alt:'icone nodejs',
      label: "Angular"
    },

    {
      src:'assets/icons/knowledge/nodejs.svg',
      alt:'icone nodejs',
      label: "Node.js"
    },

    {
      src:'assets/icons/knowledge/bootstrap.svg',
      alt:'icone bootstrap',
      label: "Bootstrap"
    },

    {
      src:'assets/icons/knowledge/tailwind.svg',
      alt:'icone tailwind',
      label: "Tailwind CSS"
    },

    {
      src:'assets/icons/knowledge/mysql.svg',
      alt:'icone mysql',
      label: "MySQL"
    },

    {
      src:'assets/icons/knowledge/git.svg',
      alt:'icone git',
      label: "Git"
    },

    {
      src:'assets/icons/knowledge/mongodb.svg',
      alt:'icone mongodb',
      label: "mongodb"
    },
    
 ])
}
