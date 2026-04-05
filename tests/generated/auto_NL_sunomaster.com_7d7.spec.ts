import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_sunomaster.com_7d7', ['https://sunomaster.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
