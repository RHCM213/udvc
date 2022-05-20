import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './css/App.css';
import Clube from './components/Clube';
import Header from './components/modules/Header';
import Home from './components/Home';
import Socios from './components/Socios';
import Modalidades from './components/Modalidades';
import Info from './components/Info.jsx';
import Galeria from './components/Galeria';
import Loja from './components/Loja';
import Footer from './components/modules/Footer';
import { useEffect, useState } from 'react';



function App() {

  const [ articles, setArticles ] = useState([])

  function toggleArticleOn(index) {
    const articlesCopy=[ ...articles];
    articlesCopy[index].modalVisible=!articlesCopy[index].modalVisible;

    setArticles(articlesCopy);
  }

  useEffect( () => {

    setArticles ([
      { 
        id: 5, 
        img: "a05.jpg",
        desc: "foto de equipa", 
        title: "CARREGA UNIÃO! - Grande Vitória!", 
        excerpt: "Os nossos jogadores da equipa de futsal foram a Mafra em mais um jogo a contar para o Campeonato do INATEL de Futsal 2021/22.\nApesar da muita luta que a equipa contrária ofereceu portaram-se à altura e trouxeram a vitória.", 
        text: "Na tarde do dia 9 de Abril, no passado sábado, a nossa equipa de futsal visitou o reduto da equipa mafrense 'RF Monte Godel', em mais um jogo a contar para o Campeonato de Lisboa do INATEL de Futsal 2021/22.\nA equipa de Mafra encontrava-se, antes desta jornada no primeiro posto. Após um jogo bastante equilibrado e em que a equipa da casa esteve 2 vezes na frente, a UDVC não virou a cara à luta e trouxe uma suada vitória expressa num resultado de 4-6, o que lhe valeu o assalto ao primeiro lugar, é caso para dizer 'a União faz a força'!\nParabéns rapazes!\nPontuação (LX INATEL 21/22 - FUTSAL):\n1. UDVC (14P) / 2. RF GODEL (13P) / 3. FC ROSSÃO (10P) / 4. GD BARCARENA (8P) / 5. CC CORUCHEUS (8P) / 6. GRDR TOJEIRA (7P) / 7. BAIRRO S.JOÃO AC (2P)", 
        postdate: "12 de Abril, 2022",
        modalVisible: false 
      },
      { 
        id: 4, 
        img: "a04.jpg",
        desc: "uma menina e um menino equipados", 
        title: "MINI-BASKET - Torneio dos Reis", 
        excerpt: "ocultar no css", 
        text: "O Torneio dos Reis está de regresso após o período conturbado que o covid-19 nos encarregou de trazer. O histórico torneio que será a 45ª edição, realizar-se-á em Abril no fim de semana de Páscoa no pavilhão anexo à sede do Galitos FC.\nOs nossos meninos poderão assim competir com os seus congêneres de forma salutar e em comunhão com os valores desportivos da modalidade. Pura e simplesmente pelo convívio e o gosto pelo desporto, sem níveis de exigência significativos derivado à tenra idade dos participantes."
        , 
        postdate: "21 de Março, 2022", 
        modalVisible: false 
      },
      { id: 3, 
        img: "a03.jpg", 
        desc: "bolo de aniversário da UDVC",
        title: "UNIÃO 53 VEZES / Próx. Eventos", 
        excerpt:"ocultar no css", 
        text: "No passado dia 11, no âmbito do programa de comemorações do 53º aniversário, foi realizada uma sessão solene, pelas 21.00 horas com direito a jantar de confraternização em seguida.\nFoi um dia em cheio, começou com o hastear da bandeira na sede, a final do torneio de futebol 3 UDVC pelas 19h, seguindo-se da actuação das nossas dançarinas de salão como abertura da nossa sessão solene.\nPRÓXIMOS EVENTOS\n(FEVEREIRO)\nDia 22 » Feira de Artesanato, 10h - 18h, Local: Sede;\nMais uma feira 'daquelas', para mostrar o talento do artesanato local.\nDia 26 » Baile Carnaval, 22h - 2h, Local: Sede;\nVai haver concurso de máscaras, e o prémio é muito, mas muito bom!\nATENÇÃO: Para salvaguardar o bem-estar de todos, e de acordo com as regras da DGS em vigor, é obrigatório apresentar um dos seguintes certificado, Certificado de Vacinação, Certificado de Testagem Negativo ou Certificado de Recuperação.\n (MARÇO)\n Dia 22 » Festa Primavera, 11h - 16h, Local: Mata da Machada;\n Pequena prova de corta mato para os mais pequenos (dos 7 aos 10), seguida de um belo piquenique.", 
        postdate: "14 de Janeiro, 2022",
        modalVisible: false  
      },
      { 
        id: 2, 
        img: "a02.jpg",
        desc: "menino no relvado a chutar uma bola", 
        title: "OS MENINOS DO FUTEBOL 7", 
        excerpt: "", 
        text: "Arredados algum tempo dos palcos do Futebol 7, a UDVC orgulha-se de comunicar que para a temporada 2021/22 está de volta a modalidade para os nossos meninos (escalão Infantis). Contudo será uma época experimental, não nos vamos inscrever na Associação Distrital.\nIremos sim, competir em mini-torneios e proceder à realização de alguns amigáveis. Os treinos realizar-se-ão (data e hora a informar em breve) no campo relvado do Santo Antoniense FC.", 
        postdate: "6 de Outubro, 2021",
        modalVisible: false  
      },
      { id: 1, 
        img: "a01.jpg",
        desc: "passo de dança de salão em dueto", 
        title: "DANÇAS DE SALÃO E PILATES ESTÃO DE VOLTA", 
        excerpt:"", 
        text: "Boas notícias! Os ensaios das Danças de Salão voltaram, a nossa querida e talentosa professora Dora recuperou bem da lesão que contraiu há uns meses e está de regresso. Os ensaios serão as Terças e Quintas pelas 20h na sede, a começar na primeira semana de Outubro.\nQuanto a Pilates começam já para a próxima semana, os treinos serão as Segundas e Quartas pelas 19.30h na sede.\nAos interessados pede-se o favor de pedir a ficha de inscrição no bar da sede ou na sala da direcção.", 
        postdate: "23 de Setembro, 2021",
        modalVisible: false  
      },  
    ]);
  },[]); 
  
  
  const [ products, setProducts ] = useState([])

  function toggleProductOn(index) {
    const productsCopy=[ ...products];
    productsCopy[index].modalVisible=!productsCopy[index].modalVisible;

    setProducts(productsCopy);
  }

  useEffect( () => {
    setProducts ([
      {
        id: 9, 
        img1: "p09.jpg",
        img2: "p09_1.jpg",
        img3: "p09.jpg",
        img4: "p09.jpg",
        img5: "p09.jpg",
        title: "Chapéu União", 
        desc: "Chapéu com rede atrás e emblema da UDVC",
        text: "Chapéu estilo 'Trucker' com rede atrás e emblema da UDVC a cores na frente.",
        price: 15,
        modalVisible: false
      },
      {
        id: 8, 
        img1: "p08.jpg",
        img2: "p08_1.jpg",
        img3: "p08.jpg",
        img4: "p08.jpg",
        img5: "p08.jpg",
        title: "Cachecol União", 
        desc: "Cachecol de malha com o emblema UDVC",
        text: "Cachecol de malha luxuosa canelada de duas camadas, com o emblema UDVC.",
        price: 15,
        modalVisible: false
      },
      {
        id: 7, 
        img1: "p07.jpg",
        img2: "p07.jpg",
        img3: "p07.jpg",
        img4: "p07.jpg",
        img5: "p07.jpg",
        title: "Sweat Branca União", 
        desc: "Sweat-shirt branca com emblema UDVC à frente",
        text: "Sweat-shirt de cor branca, 50% Algodão, 50% Poliéster, costura dupla na gola. Com a estampa do logótipo a cores da UDVC à frente.", 
        price: 20,
        modalVisible: false
      },
      {
        id: 6, 
        img1: "p06.jpg",
        img2: "p06.jpg",
        img3: "p06.jpg",
        img4: "p06.jpg",
        img5: "p06.jpg",
        title: "Crachá União", 
        desc: "Crachá com emblema UDVC",
        text: "Crachá 32mm com emblema UDVC.",
        price: 3,
        modalVisible: false 
      },
      {
        id: 5, 
        img1: "p05.jpg",
        img2: "p05_1.jpg",
        img3: "p05.jpg",
        img4: "p05.jpg",
        img5: "p05.jpg",
        title: "Galhardete União", 
        desc: "Galhardete com emblema UDVC",
        text: "Galhardete 9x12 mm, material de longa duração, com emblema UDVC.", 
        price: 8,
        modalVisible: false
      }, 
      {
        id: 4, 
        img1: "p04.jpg",
        img2: "p04.jpg",
        img3: "p04.jpg",
        img4: "p04.jpg",
        img5: "p04.jpg",
        title: "Sweat Capuz União", 
        desc: "Sweat-shirt cinza com capuz com emblema UDVC à frente",
        text: "Sweat-shirt com capuz e cor cinza, 50% Algodão, 50% Poliéster, costura dupla na gola, com estampa do emblema UDVC em cor de vinho à frente.", 
        price: 25,
        modalVisible: false
      },
      {
        id: 3, 
        img1: "p03.jpg",
        img2: "p03_1.jpg",
        img3: "p03.jpg",
        img4: "p03.jpg",
        img5: "p03.jpg",
        title: "T-Shirt Branca União", 
        desc: "T-Shirt branca com pequeno emblema UDVC no peito",
        text: "T-Shirt de cor branca, 97% Algodão, 3% Poliéster, costura dupla na gola. Com pequena estampa do emblema UDVC em cor preta à frente no peito.",
        price: 10,
        modalVisible: false
      },
      {
        id: 2, 
        img1: "p02.jpg",
        img2: "p02_1.jpg",
        img3: "p02.jpg",
        img4: "p02.jpg",
        img5: "p02.jpg",
        title: "T-Shirt Preta União", 
        desc: "T-Shirt preta com emblema UDVC à frente",
        text: "T-Shirt de cor preta, 97% Algodão, 3% Poliéster, costura dupla na gola. Com a estampa do logótipo UDVC a cores à frente.", 
        price: 12,
        modalVisible: false
      },
      {
        id: 1, 
        img1: "p01.jpg",
        img2: "p01_1.jpg",
        img3: "p01.jpg",
        img4: "p01.jpg",
        img5: "p01.jpg",
        title: "Casaco Fecho União", 
        desc: "Casaco de fecho cor de vinho com pequeno emblema UDVC no peito e um 'V' à frente",
        text: "Casaco de fecho, cor de vinho, com pequeno emblema da UDVC em cor branca no peito e um 'V' à frente.",
        price: 20,
        modalVisible: false
      } 
    ]);
  },[]);

 
  return (
    <BrowserRouter>
      <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={ <Home articles={articles} toggle={(index)=>toggleArticleOn(index)} products={products} togglep={(index)=>toggleProductOn(index)}/> } />
            <Route path="/clube" element={ <Clube /> } />
            <Route path="/socios" element={<Socios />} /> 
            <Route path="/modalidades" element={<Modalidades />} /> 
            <Route path="/info" element={<Info articles={articles} toggle={(index)=>toggleArticleOn(index)} />} /> 
            <Route path="/galeria" element={<Galeria />} />
            <Route path="/loja" element={<Loja products={products} togglep={(index)=>toggleProductOn(index)} />} />
          </Routes> 
          <Footer />               
      </div>
    </BrowserRouter>
  );
}

export default App;
