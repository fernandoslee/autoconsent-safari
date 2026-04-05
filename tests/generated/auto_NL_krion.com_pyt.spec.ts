import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_krion.com_pyt', ['https://www.krion.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
