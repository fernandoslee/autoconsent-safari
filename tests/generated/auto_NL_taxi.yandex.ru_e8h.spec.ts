import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_taxi.yandex.ru_e8h', ['https://taxi.yandex.ru/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
