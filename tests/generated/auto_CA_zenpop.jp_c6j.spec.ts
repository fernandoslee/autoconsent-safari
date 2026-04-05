import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_zenpop.jp_c6j', ['https://zenpop.jp/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
