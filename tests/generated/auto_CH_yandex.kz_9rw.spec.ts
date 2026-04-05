import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_yandex.kz_9rw', ['https://yandex.kz/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
