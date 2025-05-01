import type { StrapiApp } from '@strapi/strapi/admin';


export default {
  config: {
    theme: {
      light: {
        colors: {
          primary100: '#E8F5E9',
          primary200: '#C8E6C9',
          primary500: '#4CAF50',   // Main green
          primary600: '#43A047',
          primary700: '#388E3C',
        },
      },
      dark: {
        colors: {
          primary100: '#1B5E20',
          primary200: '#2E7D32',
          primary500: '#4CAF50',   // Same or different green
          primary600: '#66BB6A',
          primary700: '#81C784',
        },
      },
    },
  },
  bootstrap(app: StrapiApp) {
    console.log("Green theme applied to Strapi admin");
  },
};

// export default {
//   config: {
//     locales: [
//       // 'ar',
//       // 'fr',
//       // 'cs',
//       // 'de',
//       // 'dk',
//       // 'es',
//       // 'he',
//       // 'id',
//       // 'it',
//       // 'ja',
//       // 'ko',
//       // 'ms',
//       // 'nl',
//       // 'no',
//       // 'pl',
//       // 'pt-BR',
//       // 'pt',
//       // 'ru',
//       // 'sk',
//       // 'sv',
//       // 'th',
//       // 'tr',
//       // 'uk',
//       // 'vi',
//       // 'zh-Hans',
//       // 'zh',
//     ],
//   },
//   bootstrap(app: StrapiApp) {
//     console.log(app);
//   },
// };
