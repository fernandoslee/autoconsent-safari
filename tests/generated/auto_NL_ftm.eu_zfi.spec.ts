import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_ftm.eu_zfi', ['https://www.ftm.eu/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
