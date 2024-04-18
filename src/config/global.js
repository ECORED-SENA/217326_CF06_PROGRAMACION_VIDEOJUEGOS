export default {
  global: {
    componenteFormativo:
      '<em>Testing</em> en videojuegos y emprendimiento tecnológico',
    descripcionCurso:
      'Dentro de este componente formativo, el aprendiz aprenderá las diferentes técnicas para la realización de pruebas en videojuegos. Como se automatizan y los informes y correcciones que las mismas generan. Así mismo, dentro de este componente está el emprendimiento orientado a industria de videojuegos donde el aprendiz entenderá como puede monetizar sus proyectos y las diferentes alternativas que encontrará dentro del ámbito nacional e internacional.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a4.png'),
      },
      {
        clases: ['banner-principal-decorativo-5', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/a5.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: '¿Por qué es necesario probar los juegos?',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: '¿Por qué es necesario probar los juegos?',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Métodos de prueba de juegos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: '¿Qué es la automatización de pruebas de juegos?',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: '¿Qué hacen los QA testers de juegos?',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: '¿Cómo funciona la prueba de juegos?',
            hash: 't_1_5',
          },
          {
            numero: '1.6',
            titulo:
              'Métricas clave de las pruebas funcionales de control de calidad',
            hash: 't_1_6',
          },
          {
            numero: '1.7',
            titulo: 'Informes de errores',
            hash: 't_1_7',
          },
          {
            numero: '1.8',
            titulo: 'Tipos principales de métodos de prueba de juegos',
            hash: 't_1_8',
          },
          {
            numero: '1.9',
            titulo: 'Cómo funcionan las pruebas en diferentes plataformas',
            hash: 't_1_9',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Cómo iniciar las pruebas o <em>testing</em> en un videojuego',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Utilizando el <em>Framework Test Runner - Unit testing</em> en Unity',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Pruebas del sistema',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Pruebas de portabilidad',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Pruebas de compatibilidad',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Pruebas de rendimiento',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Pruebas de aceptación',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Emprendimiento Tecnológico',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Emprendimiento Tecnológico',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Emprendimiento Tecnológico',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Monetización',
            hash: 't_5_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF06_217326_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Cómo iniciar las pruebas o “testing” en un videojuego. ',
      referencia: 'Unity Manual. (s.f.). Unity Test “Framework” overview. ',
      tipo: 'Otro',
      link:
        'https://docs.unity3d.com/Packages/com.unity.test-framework@1.3/manual/index.html ',
    },
    {
      tema: 'Pruebas del sistema. ',
      referencia: 'Kodeco. (2019). Introduction To Unity Unit “testing” ',
      tipo: 'Otro',
      link: 'https://www.kodeco.com/9454-introduction-to-unity-unit-testing ',
    },
    {
      tema: 'Emprendimiento tecnológico',
      referencia:
        'TEDx. (2019, diciembre 10). Plataforma de emprendimiento tecnológico | Mario Valle | Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=Ma4MgfuZpV0',
    },
    {
      tema: 'Monetización',
      referencia:
        'JAndGar. (2023, mayo 13). Monetizacion de los Videojuegos en la Actualidad- Podcast. Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=hpfQ5W57djA',
    },
  ],
  glosario: [
    {
      termino: '<em>Ad hoc</em>',
      significado:
        ' que es apropiado, adecuado o especialmente dispuesto para un determinado fin.',
    },
    {
      termino: '<em>CPU</em>',
      significado:
        'una unidad central de procesamiento o CPU, es una pieza de “<em>hardware</em>” que permite que tu computadora interactúe con todas las aplicaciones y programas instalados.',
    },
    {
      termino: '<em>Framework</em>',
      significado:
        'es un esquema o marco de trabajo que ofrece una estructura base para elaborar un proyecto con objetivos específicos, una especie de plantilla que sirve como punto de partida para la organización y desarrollo de <em>“software”</em>.',
    },
    {
      termino: '<em>QA</em>',
      significado:
        'un QA <em>(Quality Assurance)</em> o analista QA es el profesional responsable de asegurar la calidad del “<em> software”</em> y de prevenir fallos en él.',
    },
    {
      termino: '<em>SetUp</em>',
      significado:
        'es una herramienta de los sistemas operativos y los programas informáticos que permite configurar diversas opciones de acuerdo a las necesidades del usuario.',
    },
    {
      termino: 'Teastear / <em>testing</em>',
      significado:
        'testear es obtener la información necesaria para mejorar el sistema que se está probando, pero también para mejorar los propios procesos de desarrollo y de pruebas. Hay diferentes objetivos en el <em>testing</em>: Buscar los defectos. Ganar confianza respecto al nivel de calidad.',
    },
    {
      termino: '<em>Test Runner</em>',
      significado:
        'es una utilidad que nos permite escribir y correr tests para una aplicación. Existen gran variedad de <em>tests runner</em> como por ejemplo mocha.',
    },
    {
      termino: '<em>UX</em>',
      significado:
        'el diseño UX se refiere al término «diseño de experiencia de usuario», mientras que UI significa «diseño de interfaz de usuario».',
    },
  ],
  referencias: [
    {
      referencia:
        'Pantaleo. G. (2016). <em>Calidad en el Desarrollo de Software 2.</em> Edición. Alfa.Omega',
      link: '',
    },
    {
      referencia:
        'Ries, E. (2012). <em>El método de Lean Startup</em>. Deusto.',
      link: '',
    },
    {
      referencia: 'Awad, W. (2021). Game “testing” Automation Guidance.',
      link:
        'https://www.theseus.fi/bitstream/handle/10024/505977/Game%20Testing%20Automation%20Guidance.pdf?sequence=2&isAllowed=y',
    },
    {
      referencia:
        'Da Silva Lima, G. et al. (2021). Devops methodology in game development with Unity 3D.',
      link:
        'https://www.iadisportal.org/digital-library/devops-methodology-in-game-development-with-unity3d',
    },
    {
      referencia:
        'Koepke, B, Pelletier, B., Adair, D., Jhawar, R., Macaulay, I. & Bielecki, T. (2013). Agile Game Development.',
      link:
        'http://kremer.cpsc.ucalgary.ca/courses/seng403/W2013/papers/05GameDevelopment.pdf',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Carlos Andrés Cortes',
          cargo: 'Experto temático',
          centro:
            'Centro de Diseño e Innovación Tecnológica Industrial- Regional Risaralda',
        },
        {
          nombre: 'Paola Alexandra Moya Peralta',
          cargo: 'Diseñadora instruccional',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Blanca Flor Tinoco',
          cargo: 'Diseñador de Contenidos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Camilo Andres Bolaño Rey',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres ',
          cargo: 'Storyboard e Ilustración ',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada ',
          cargo: 'Animador y Productor Multimedia',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Camilo Andrés Bolaño Rey',
          cargo: 'Locución',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Camilo Andres Bolaño Rey',
          cargo: 'Actividad Didáctica',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validador de Recursos Educativos Digitales',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
