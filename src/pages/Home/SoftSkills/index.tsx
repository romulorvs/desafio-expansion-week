import React, { useState } from 'react';
import Column from '../../../components/SkillColumn';
import Content from './style';
import imgProactivity from '../../../assets/proactivity.jpg';
import imgResilience from '../../../assets/resilience.jpg';
import imgCommunication from '../../../assets/communication.jpg';

const SoftSkills: React.FC = () => {
  const [columns] = useState([
    {
      imgUrl: imgProactivity,
      title: 'Proatividade',
      smallDescription:
        'Tome decisões e se antecipe perante situações adversas.',
      videoUrl: 'https://www.youtube.com/embed/sJoQ9hGGsJU',
      videoTitle: 'Proatividade | Nerdologia Ensina',
      Description: (
        <p>
          <strong>
            Profissionais proativos se antecipam a situações adversas.
          </strong>
          A proatividade é a iniciativa da tomada de decisões e a capacidade de
          se antecipar a situações adversas. Ser proativo também traz muitos
          benefícios para a vida pessoal, já que a pessoa proativa toma a
          responsabilidade pelos seus atos e tem maior predisposição a buscar
          atingir seus objetivos.
        </p>
      ),
    },
    {
      imgUrl: imgResilience,
      title: 'Resiliência',
      smallDescription:
        'Tenha foco, defina metas e persista em seus objetivos.',
      videoUrl: 'https://www.youtube.com/embed/dQY1hK_RTBI',
      videoTitle: 'Resiliência - Thiago Rodrigo',
      Description: (
        <p>
          <strong>Pessoas Resilientes focam em seus objetivos.</strong>
          Resiliência é a capacidade que uma pessoa tem em lidar com problemas,
          estabelecer metas e persistir nos seus objetivos. Profissionais
          resilientes tem maior facilidade em adaptar-se a mudanças, superar
          obstáculos ou resistir à pressão de situações difíceis.
        </p>
      ),
    },
    {
      imgUrl: imgCommunication,
      title: 'Comunicação',
      smallDescription: 'Nada abrirá mais portas do que saber se comunicar',
      videoUrl: 'https://www.youtube.com/embed/wW5INN4_tiQ',
      videoTitle: 'Como melhorar a comunicação em 7 passos',
      Description: (
        <p>
          <strong>Líderes sabem comunicar suas ideias e opiniões.</strong>A
          comunicação é uma das principais competências necessárias a todo o ser
          humano, principalmente no mundo em que se vive, numa época de
          constantes mudanças, em que as empresas dão cada vez mais valor a
          isso. É uma competência fundamental para o profissional que quer obter
          sucesso no mercado de trabalho.
        </p>
      ),
    },
  ]);

  return (
    <Content id="softskills">
      {columns.map(
        ({
          imgUrl,
          title,
          smallDescription,
          Description,
          videoTitle,
          videoUrl,
        }) => (
          <Column
            key={title}
            imgUrl={imgUrl}
            title={title}
            smallDescription={smallDescription}
            Description={Description}
            videoTitle={videoTitle}
            videoUrl={videoUrl}
          />
        ),
      )}
    </Content>
  );
};

export default SoftSkills;
