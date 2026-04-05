import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_nic.yandex.com_1e6', ['https://nic.yandex.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
