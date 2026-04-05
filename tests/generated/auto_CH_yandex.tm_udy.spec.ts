import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_yandex.tm_udy', ['https://yandex.tm/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
