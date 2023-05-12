// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

// ================================================================

var header = {
  Name: {
    firstname: 'Ivan',
    lastname: 'Ivanov',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600$ в місяц',
  address: 'м. Київ, вул. Антоновича',
}

var footer = {
  social: {
    email: {
      text: 'ivanov@mail.com',
      href: 'mailto:ivanov@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    linkedin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
}

// var address = 'м. Київ, вул. Антоновича'

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

router.get('/summary', function (req, res) {
  res.render('summary', {
    page: {
      title: 'Resume | Summary',
    },

    header,

    main: {
      summary: {
        title: 'Summary',
        text: 'Open-minded for new technologies, with 1 years of experience in development. Whenever I start to work on a new project I learn the domain and try to understand the idea of the project. Good team player, every colleague is a friend to me.',
      },

      experience: {
        title: 'Other experience',
        text: 'Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics ( tournament position, goals etc), analyzing by simple mathematics models and preparing probability for such events like: money line - first win / draw / second win, totals etc.',
      },
    },

    footer,
  })
})

// ================================================================

router.get('/skills', function (req, res) {
  res.render('skills', {
    page: {
      title: 'Resume | Skills',
    },

    header,

    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Handlebars',
          point: 10,
          isTop: true,
        },
        {
          name: 'VS Code',
          point: 8,
          isTop: false,
        },
        {
          name: 'Git',
          point: 7,
        },
        {
          name: 'Terminal',
          point: 6,
        },
        {
          name: 'NPM',
          point: 5,
        },
        {
          name: 'React.js',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],
      hobbies: [
        {
          name: 'Шахи',
          isMain: true,
        },
        {
          name: 'Спорт',
          isMain: true,
        },
        {
          name: 'Дайвінг',
          isMain: false,
        },
        {
          name: 'Мотоцикл',
          isMain: false,
        },
      ],
    },

    footer,
  })
})

// ================================================================

router.get('/education', function (req, res) {
  res.render('education', {
    page: {
      title: 'Resume | Education',
    },

    header,

    main: {
      educations: [
        {
          name: 'Київський національний університет будівництва і архітектури',
          isEnd: true,
        },
        {
          name: 'Київський національний університет імені Тараса Шевченка',
          isEnd: true,
        },
        {
          name: 'Київський національний університет культури і мистецтв',
          isEnd: false,
        },
        {
          name: 'Київський національний економічний університет імені Вадима Гетьмана',
          isEnd: false,
        },
      ],

      certificates: [
        {
          name: 'Якості',
          id: '111',
        },
        {
          name: 'Гарантії',
          id: '222',
        },
        {
          name: 'Надійності',
          id: '333',
        },
      ],
    },

    footer,
  })
})

// ================================================================

router.get('/work', function (req, res) {
  res.render('work', {
    layout: 'Big',

    page: {
      title: 'Resume | work',
    },

    header,

    main: {
      works: [
        {
          position: 'Junior Fullstack Developer',
          company: {
            name: 'IT Brains',
            // url: null,
            url: 'https://it-brains.com.ua',
          },
          duration: {
            from: '10.10.2022',
            to: null,
            // to: '22.03.2023',
          },
          projectAmount: 3,

          projects: [
            {
              name: 'Resume',
              url: 'https://trust.com.ua',
              about:
                'Get free crypto from upcoming airdrops',
              stacks: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML / CSS',
                },
                {
                  name: 'Node.js',
                },
              ],

              stacksAmount: 3,

              awards: [
                {
                  name: 'Free Crypto Airdrops in 2023',
                },
                {
                  name: 'Trust wallet airdrop 2023',
                },
              ],
              awardsAmount: 2,
            },
          ],
        },
      ],
    },

    footer,
  })
})

// Підключаємо роутер до бек-енду
module.exports = router
