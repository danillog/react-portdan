import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
    resources:{
        en: {
            translations:{
                idioma:"Change the language",
                bio: "Hello, how are you? I have been working in the front-end development market for 3 years. Creating websites with reactJS and maintenance in wordpress.",
                Projetos: "Projects",
                AtakTitulo: "Atak uniforme",
                AtakDescribe: "Started as posts on the page, targeting the non-local audience and the construction or marketing of the sales set.",
                Titulo355:"355 BIT Creation of Logo and Home Page",
                Describe355:"Page with search for information in virtual currency API.",
                ProTitulo:"Pro Solution - Sales website creation",
                ProDescribe:"Using wordpress and woocomerce, a sales page was created, payment methods are made with Mercado Pago.",
                FilmeTitulo:"Movies Page",
                FilmeDescribe:"A website I made to train the use of firebase and to show my knowledge with ReactJS",
                BlogTitulo:"Blog",
                BlogDescribe:"This is a website I made to exemplify the knowledge for creating user authentication and blog posts, using FIrebase.",
                contato:"Social Networks",
                direitos:"All Rights Reserved."
            }
        },
        pt: {
            translations: {
                idioma:"Mudar idioma",
                bio: " Olá tudo bem?  Atuo no mercado de desenvolvimento front-end  há 3 anos. Criando sites com reactJS e manutenção em wordpress. ",
                Projetos: "Projetos",
                AtakTitulo: "Atak uniforme Marketing Digital ",
                AtakDescribe: "Iniciado as postagens na página, focando no público local e construindo o setor de marketing de vendas. ",
                Titulo355:"355 BIT  Criação de Logo e Página home ",
                Describe355:"Pagina com busca de informações em API de moedas virtuais. ",
                ProTitulo:"Pro Solution - Criação de site de vendas",
                ProDescribe:"Utilizando o wordpress e woocomerce, foi criada uma página de vendas, métodos de pagamentos são feitos com Mercado Pago.",
                FilmeTitulo:"Página de Filmes ",
                FilmeDescribe:"Um site que fiz para treinar o uso do firebase e para mostrar meu conhecimento com  ReactJS",
                BlogTitulo:"Blog",
                BlogDescribe:"Este é um site que fiz para exemplificar o conhecimento para criação de autenticação do usuário e postagens em um blog, utilizando o FIrebase.",
                contato:"Redes Sociais",
                direitos:"Todos os direitos reservados."
            }
        },
        es:{
            translations:{
                idioma:"Cambiar idioma",
                bio: " ¿Hola todo bien? Llevo 3 años trabajando en el mercado de desarrollo front-end. Creación de sitios web con reactJS y mantenimiento en wordpress.n",
                Projetos: "Proyectos",
                AtakTitulo: "Atak uniforme",
                AtakDescribe: "Comenzó como publicaciones en la página, dirigidas a la audiencia no local y la construcción o marketing del conjunto de ventas.",
                Titulo355:"355 BIT Creación de logotipo y página de inicio",
                Describe355:"Página con búsqueda de información en API de moneda virtual.",
                ProTitulo:"Pro Solution: creación de un sitio web de ventas",
                ProDescribe:"Utilizando wordpress y woocomerce se creó una página de ventas, los métodos de pago se realizan con Mercado Pago.",
                FilmeTitulo:"Página de películas",
                FilmeDescribe:"Un sitio web que hice para entrenar el uso de firebase y mostrar mi conocimiento con ReactJS",
                BlogTitulo:"Blog",
                BlogDescribe:"Este es un sitio que hice para ejemplificar mi conocimiento para crear autenticación de usuario y publicaciones de blog, usando FIrebase.",
                contato:"Redes Sociales",
                direitos:"Todos los derechos reservados."
            }
        }        
    },
    fallbackLng:"en",
    debug: true,

    ns: ["translations"],
    defaultNS: "translations",

    keySeparator: false, // we use content as keys

    interpolation: {
        escapeValue: false, // not needed for react!!
        formatSeparator: ","
    },

    react: {
        wait: true
    }
});

export default i18n;