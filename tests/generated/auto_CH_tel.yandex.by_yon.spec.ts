import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_tel.yandex.by_yon', ['https://tel.yandex.by/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
