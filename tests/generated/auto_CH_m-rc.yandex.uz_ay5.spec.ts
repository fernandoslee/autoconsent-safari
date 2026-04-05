import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_m-rc.yandex.uz_ay5', ['https://m-rc.yandex.uz/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
