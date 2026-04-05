import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_breeze.social_v0x', ['https://breeze.social/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
