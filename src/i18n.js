import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
    resources:{
        en: {
            translations:{
                idioma:"Change the language",
                bioI: "I'm Danilo, I'm",
                bio: " years old I'm a developer and in my free time I like to study typography and design",
                trabalhoT: "Knowledge applied in projects",
                trabalhoC1: "Projects",
                trabalhoC2: "Knowledge used",
                trabalho1: "Bug fix in wordpress plugin",
                trabalho2: "Videoconference scheduling (under development)",
                trabalho3: "This portfolio",
                trabalho4: "Logo and frontend creation",
                trabalho5: "Business virtualization",
                trabalho5a:"Social media posts",
                design:"Design Projects",
                contato:"Social networks",
                direitos:"All Rights Reserved."
            }
        },
        pt: {
            translations: {
                idioma:"Mudar idioma",
                bioI: "Sou Danillo, tenho",
                bio: " anos sou desenvolvedor e nas horas livres gosto de estudar tipografia e design",
                trabalhoT: "Conhecimento aplicado em projetos",
                trabalhoC1: "Projetos",
                trabalhoC2: "Conhecimento utilizado",
                trabalho1: "Correção de bug no plugin wordpress",
                trabalho2: "Agendamento de videoconferencia (em desenvolvimento)",
                trabalho3: "Este portfólio",
                trabalho4: "Criação de logo e frontend",
                trabalho5: "Business virtualization",
                trabalho5a:"Postagens em redes sociais ",
                design:"Projetos de Design",
                contato:"Redes sociais",
                direitos:"Todos os direitos reservados."
            }
        },
        es:{
            translations:{
                idioma:"Cambiar idioma",
                bioI: "Soy Danilo, tengo",
                bio: " años, soy desarrollador y en mi tiempo libre me gusta estudiar tipografía y design",
                trabalhoT: "Conocimiento aplicado en proyectos.",
                trabalhoC1: "Proyectos",
                trabalhoC2: "Conocimiento utilizado",
                trabalho1: "Corrección de errores en el complemento de WordPress",
                trabalho2: "Programación de videoconferencia (en desarrollo)",
                trabalho3: "Este portafolio",
                trabalho4: "Creación de logo y frontend",
                trabalho5: "Virtualización de negocios",
                trabalho5a:"Publicaciones en redes sociales",
                design:"Proyectos de diseño",
                contato:"Redes sociales",
                direitos:"Todos los derechos reservados."
            }
        },
        gn:{
            translations:{
                idioma:"Sprache ändern",
                bioI: "Ich bin Danilo, ich bin",
                bio: " Jahre alt, ich bin Entwickler und in meiner Freizeit studiere ich gerne Typografie und Design",
                trabalhoT: "In Projekten angewandtes Wissen",
                trabalhoC1: "Projekte",
                trabalhoC2: "Verwendetes Wissen",
                trabalho1: "Fehlerbehebung im WordPress-Plugin",
                trabalho2: "Videokonferenzplanung (in Entwicklung)",
                trabalho3: "Dieses Portfolio",
                trabalho4: "Logo- und Frontend-Erstellung",
                trabalho5: "Geschäftsvirtualisierung",
                trabalho5a:"Social Media Beiträge",
                design:"Projekte entwerfen",
                contato:"Soziale Medien",
                direitos:"Alle Rechte vorbehalten."
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