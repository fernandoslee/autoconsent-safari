import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_yandex.uz_gka', ['https://yandex.uz/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
