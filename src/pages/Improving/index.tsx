import React, { useState } from 'react';
import NewsCard from '../../components/NewsCard';
import Content from './style';
import imgColaboracao from '../../assets/ferramenta-de-colaboracao.png';
import imgLideranca from '../../assets/lideranca.jpg';
import imgComunicacao from '../../assets/comunicacao.jpg';
import imgResiliencia from '../../assets/resiliencia.jpg';
import imgAdaptabilidade from '../../assets/adaptabilidade.jpg';
import imgProatividade from '../../assets/proatividade.jpg';
import imgInteligenciaEmocional from '../../assets/inteligencia-emocional.jpg';
import imgSoftSkills from '../../assets/soft-skills.png';

const Improving: React.FC = () => {
  const [links] = useState([
    {
      imgUrl: imgColaboracao,
      url: 'https://rockcontent.com/br/blog/ferramenta-de-colaboracao/',
      title: 'Ferramentas de Colaboração: O que são e como usá-las.',
      description: `Os processos da sua agência estão desorganizados e gerando atrasos nas entregas? O uso de...`,
    },
    {
      imgUrl: imgLideranca,
      url: 'http://populumrh.com/blog/2019/01/17/seja-um-exemplo-de-lideranca/',
      title: 'Seja um exemplo de liderança!',
      description: `Liderar ou chefiar: qual tem sido o seu papel dentro da empresa? O ponto de partida para responder a...`,
    },
    {
      imgUrl: imgComunicacao,
      url:
        'https://www.ozai.com.br/importancia-da-comunicacao-interna-e-externa-na-empresa/',
      title: 'A importância da comunicação interna e externa na empresa',
      description: `Entrar em contato com outras pessoas faz parte do seu dia a dia. Mas você já pensou sobre a...`,
    },
    {
      imgUrl: imgResiliencia,
      url:
        'http://cra-pr.org.br/resiliencia-e-fator-chave-para-mercado-de-trabalho/',
      title: 'Resiliência é fator chave para mercado de trabalho',
      description: `A resiliência não é uma habilidade inata. Ao longo da vida, a pessoa pode desenvolver essa característica...`,
    },
    {
      imgUrl: imgAdaptabilidade,
      url: 'https://arbache.com/blog/adaptabilidade-e-flexibilidade/',
      title: 'Adaptabilidade e flexibilidade: as habilidades-chave do presente',
      description: `A crise do coronavírus evidenciou uma realidade que há tempos já vem se projetando no mercado de trabalho...`,
    },
    {
      imgUrl: imgProatividade,
      url:
        'http://www.consultoriacontato.com/2016/05/24/proatividade-ate-que-ponto-e-positivo/',
      title: 'Proatividade: Até que ponto é positiva?',
      description: `Uma das habilidades profissionais mais apreciadas pelas empresas é a proatividade. Colaboradores que...`,
    },
    {
      imgUrl: imgInteligenciaEmocional,
      url:
        'https://www.gazetadopovo.com.br/economia/livre-iniciativa/carreira-e-concursos/5-qualidades-de-lideres-que-esbanjam-inteligencia-emocional-5rxduif3dcgyh4fpjg9bagpe8/',
      title: '5 qualidades de líderes que esbanjam inteligência emocional',
      description: `Embora pareçam semideuses aos olhos de muitas pessoas, alguns dos líderes mais venerados no mundos...`,
    },
    {
      imgUrl: imgSoftSkills,
      url:
        'https://www.perftracker.com.br/2019/12/soft-skills-e-sua-importancia-na-jornada-de-trabalho/',
      title: 'Soft Skills e sua Importância na Jornada de Trabalho',
      description: `Soft skill é um termo em inglês que em sua tradução literal significa competência. Mas o termo...`,
    },
  ]);

  return (
    <Content>
      <div>
        <h3>Desenvolva-se!</h3>
      </div>
      <ul>
        {links.map(({ imgUrl, url, title, description }) => (
          <NewsCard
            key={title}
            imgUrl={imgUrl}
            url={url}
            description={description}
            title={title}
          />
        ))}
      </ul>
    </Content>
  );
};

export default Improving;
