import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_altohorno.com_mdt', ['https://altohorno.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
