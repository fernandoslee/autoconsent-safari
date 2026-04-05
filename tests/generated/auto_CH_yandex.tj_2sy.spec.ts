import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_yandex.tj_2sy', ['https://yandex.tj/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
