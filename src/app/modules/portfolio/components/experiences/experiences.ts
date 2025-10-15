import { Component, signal } from '@angular/core';
import { IExperience } from '../../interface/Experiences.interface';

@Component({
  selector: 'app-experiences',
  imports: [],
  templateUrl: './experiences.html',
  styleUrl: './experiences.scss',
})
export class Experiences {
  public arrayExperiences = signal<IExperience[]>([
    {
      summary: {
        strong: 'Estagiário',
        p: 'Extreme Digital Solutions | Mar 2023 - Mar 2025',
      },
      text: '<p>Durante meu período como estagiário na EDS, eu apoiei no desenvolvimento de funcionalidades e correção de bugs, colaborando com a equipe em sessões de pair programming</p>',
    },

    {
      summary: {
        strong: 'Desenvolvedor Front End Junior I',
        p: 'Extreme Digital Solutions | Mar 2025 - Jul 2025 ',
      },
      text: '<p>Durante meu período como desenvolvedor júnior na EDS, atuei no desenvolvimento de interfaces responsivas com React e JavaScript/TypeScript a partir de layouts do Figma.</p> <p>Realizei integração de APIs RESTful para gerenciamento de estado e consumo de dados da aplicação. <p>Além disso, ajudei na otimização de componentes, refatoração de código e implementação de testes unitários para garantir a performance e qualidade do software.</p> .</p>', 

      
    },
  ]);
}
