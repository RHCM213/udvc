import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Clube from './components/Clube';
import Header from './components/comps_p/Header';
import Home from './components/Home';
import Socios from './components/Socios';
import Modalidades from './components/Modalidades';
import Info from './components/Info.jsx';
import Galeria from './components/Galeria';
import Loja from './components/Loja';
import Carrinho from './components/Carrinho';



function App() {
  
  const articles = [
    { 
      id: 5, 
      img: "a05.jpg",
      desc: "foto de equipa", 
      title: "CARREGA UNIÃO! Grande Vitória!", 
      excerpt: "Os nossos jogadores da equipa de futsal foram a Mafra em mais um jogo a contar para o Campeonato do INATEL de Futsal 2021/22./n/n Apesar da muita luta que a equipa contrária ofereceu portaram-se à altura e trouxeram a vitória.", 
      text: "Na tarde do dia 9 de Abril, no passado sábado, a nossa equipa de futsal visitou o reduto da equipa mafrense 'RF Monte Godel', em mais um jogo a contar para o Campeonato de Lisboa do INATEL de Futsal 2021/22. /p A equipa de Mafra encontrava-se, antes desta jornada no primeiro posto. Após um jogo bastante equilibrado e em que a equipa da casa esteve 2 vezes na frente, a UDVC não virou a cara à luta e trouxe uma suada vitória expressa num resultado de 4-6, o que lhe valeu o assalto ao primeiro lugar, é caso para dizer 'a União faz a força'! /p Parabéns rapazes! /p Pontuação (LX INATEL 21/22 - FUTSAL): /p 1. UDVC (14P) / 2. RF GODEL (13P) / 3. FC ROSSÃO (10P) / 4. GD BARCARENA (8P) / 5. CC CORUCHEUS (8P) / 6. GRDR TOJEIRA (7P) / 7. BAIRRO S.JOÃO AC (2P)", 
      postdate: "12 de Abril, 2022", 
    },
    { 
      id: 4, 
      img: "a04.jpg",
      desc: "uma menina e um menino equipados", 
      title: "MINI-BASKET - Torneio dos Reis", 
      excerpt: "", 
      text: "O Torneio dos Reis está de regresso após o período conturbado que o covid-19 nos encarregou de trazer. O histórico torneio que será a 45ª edição, realizar-se-á em Abril no fim de semana de Páscoa no pavilhão anexo à sede do Galitos FC. /p Os nossos meninos poderão assim competir com os seus congêneres de forma salutar e em comunhão com os valores desportivos da modalidade. Pura e simplesmente pelo convívio e o gosto pelo desporto, sem níveis de exigência significativos derivado à tenra idade dos participantes."
      , 
      postdate: "21 de Março, 2022", 
    },
    { id: 3, 
      img: "a03.jpg", 
      desc: "bolo de aniversário da UDVC",
      title: "UNIÃO 53 VEZES / Próx. Eventos", 
      excerpt:"", 
      text: "No passado dia 11, no âmbito do programa de comemorações do 53º aniversário, foi realizada uma sessão solene, pelas 21.00 horas com direito a jantar de confraternização em seguida./p Foi um dia em cheio, começou com o hastear da bandeira na sede, a final do torneio de futebol 3 UDVC pelas 19h, seguindo-se da actuação das nossas dançarinas de salão como abertura da nossa sessão solene. /p PRÓXIMOS EVENTOS /p (FEVEREIRO) /p Dia 22 » Feira de Artesanato, 10h - 18h, Local: Sede; /p Mais uma feira 'daquelas', para mostrar o talento do artesanato local. /p Dia 26 » Baile Carnaval, 22h - 2h, Local: Sede; /p Vai haver concurso de máscaras, e o prémio é muito, mas muito bom! /p ATENÇÃO: Para salvaguardar o bem-estar de todos, e de acordo com as regras da DGS em vigor, é obrigatório apresentar um dos seguintes certificado, Certificado de Vacinação, Certificado de Testagem Negativo ou Certificado de Recuperação. /p (MARÇO) /p Dia 22 » Festa Primavera, 11h - 16h, Local: Mata da Machada; /p Pequena prova de corta mato para os mais pequenos (dos 7 aos 10), seguida de um belo piquenique.", 
      postdate: "14 de Janeiro, 2022", 
    },
    { 
      id: 2, 
      img: "a02.jpg",
      desc: "menino no relvado a chutar uma bola", 
      title: "OS MENINOS DO FUTEBOL 7", 
      excerpt: "", 
      text: "Arredados algum tempo dos palcos do Futebol 7, a UDVC orgulha-se de comunicar que para a temporada 2021/22 está de volta a modalidade para os nossos meninos (escalão Infantis). Contudo será uma época experimental, não nos vamos inscrever na Associação Distrital. /p Iremos sim, competir em mini-torneios e proceder à realização de alguns amigáveis. Os treinos realizar-se-ão (data e hora a informar em breve) no campo relvado do Santo Antoniense FC.", 
      postdate: "6 de Outubro, 2021", 
    },
    { id: 1, 
      img: "a01.jpg",
      desc: "passo de dança de salão em dueto", 
      title: "DANÇAS DE SALÃO E PILATES ESTÃO DE VOLTA", 
      excerpt:"", 
      text: "Boas notícias! Os ensaios das Danças de Salão voltaram, a nossa querida e talentosa professora Dora recuperou bem da lesão que contraiu há uns meses e está de regresso. Os ensaios serão as Terças e Quintas pelas 20h na sede, a começar na primeira semana de Outubro. /p Quanto a Pilates começam já para a próxima semana, os treinos serão as Segundas e Quartas pelas 19.30h na sede. /p Aos interessados pede-se o favor de pedir a ficha de inscrição no bar da sede ou na sala da direcção.", 
      postdate: "23 de Setembro, 2021", 
    },  
  ];

  return (
    <BrowserRouter>
      <div className="App">
          <Header />
          
          
          
          <Routes>
            <Route path="/" element={ <Home articles={articles} /> } />
            <Route path="/clube" element={ <Clube /> } />
            <Route path="/socios" element={<Socios />} /> 
            <Route path="/modalidades" element={<Modalidades />} /> 
            <Route path="/info" element={<Info articles={articles} />} /> 
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/loja" element={<Loja />} />
            <Route path="/carrinho" element={<Carrinho />} />
          </Routes>          
        
      </div>
    </BrowserRouter>
  );
}

export default App;
