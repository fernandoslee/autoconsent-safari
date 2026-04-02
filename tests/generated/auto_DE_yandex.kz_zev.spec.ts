import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_yandex.kz_zev', ['https://yandex.kz/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
