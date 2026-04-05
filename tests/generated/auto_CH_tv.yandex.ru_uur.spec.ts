import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_tv.yandex.ru_uur', ['https://tv.yandex.ru/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
