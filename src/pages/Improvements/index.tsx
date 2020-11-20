import React, { useState } from 'react';
import NewsCard from '../../components/NewsCard';
import Content from './style';

const Improvements: React.FC = () => {
  const [links] = useState([
    {
      imgUrl:
        'https://rockcontent.com/wp-content/uploads/2020/02/ferramenta-de-colaboracao.png',
      url: 'https://rockcontent.com/br/blog/ferramenta-de-colaboracao/',
      title: 'Ferramentas de Colaboração: O que são e como usá-las.',
      description: `Os processos da sua agência estão desorganizados e gerando atrasos nas entregas? O uso de...`,
    },
    {
      imgUrl:
        'http://populumrh.com/blog/wp-content/uploads/2019/01/453430-PG21KR-462.jpg',
      url: 'http://populumrh.com/blog/2019/01/17/seja-um-exemplo-de-lideranca/',
      title: 'Seja um exemplo de liderança!',
      description: `Liderar ou chefiar: qual tem sido o seu papel dentro da empresa? O ponto de partida para responder a...`,
    },
    {
      imgUrl:
        'https://www.ozai.com.br/wp-content/uploads/2019/09/original-e6dc77d1bdb015fd95960c8015b2210d.jpg',
      url:
        'https://www.ozai.com.br/importancia-da-comunicacao-interna-e-externa-na-empresa/',
      title: 'A importância da comunicação interna e externa na empresa',
      description: `Entrar em contato com outras pessoas faz parte do seu dia a dia. Mas você já pensou sobre a...`,
    },
    {
      imgUrl:
        'https://cra-pr.org.br/wp-content/uploads/2019/09/resiliencia.png',
      url:
        'http://cra-pr.org.br/resiliencia-e-fator-chave-para-mercado-de-trabalho/',
      title: 'Resiliência é fator chave para mercado de trabalho',
      description: `A resiliência não é uma habilidade inata. Ao longo da vida, a pessoa pode desenvolver essa característica...`,
    },
    {
      imgUrl:
        'https://arbache.com/blog/wp-content/uploads/2020/06/010-6-990x660.png',
      url: 'https://arbache.com/blog/adaptabilidade-e-flexibilidade/',
      title: 'Adaptabilidade e flexibilidade: as habilidades-chave do presente',
      description: `A crise do coronavírus evidenciou uma realidade que há tempos já vem se projetando no mercado de trabalho...`,
    },
    {
      imgUrl:
        'http://www.consultoriacontato.com/wp-content/uploads/2016/05/ser-proativo.jpg',
      url:
        'http://www.consultoriacontato.com/2016/05/24/proatividade-ate-que-ponto-e-positivo/',
      title: 'Proatividade: Até que ponto é positiva?',
      description: `Uma das habilidades profissionais mais apreciadas pelas empresas é a proatividade. Colaboradores que...`,
    },
    {
      imgUrl:
        'https://media.gazetadopovo.com.br/2018/02/d45050807656ac7deede77501f04ab9e-gpMedium.jpg',
      url:
        'https://www.gazetadopovo.com.br/economia/livre-iniciativa/carreira-e-concursos/5-qualidades-de-lideres-que-esbanjam-inteligencia-emocional-5rxduif3dcgyh4fpjg9bagpe8/',
      title: '5 qualidades de líderes que esbanjam inteligência emocional',
      description: `Embora pareçam semideuses aos olhos de muitas pessoas, alguns dos líderes mais venerados no mundos...`,
    },
    {
      imgUrl:
        'https://www.perftracker.com.br/wp-content/uploads/2019/12/soft-skills.png',
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

export default Improvements;
