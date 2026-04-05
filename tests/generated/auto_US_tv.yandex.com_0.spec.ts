import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_tv.yandex.com_0', ['http://tv.yandex.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
