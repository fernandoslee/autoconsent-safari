import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_dns.yandex.ru_8x3', ['https://dns.yandex.ru/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
