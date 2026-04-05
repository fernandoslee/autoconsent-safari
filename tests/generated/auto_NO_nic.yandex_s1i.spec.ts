import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_nic.yandex_s1i', ['https://nic.yandex/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
