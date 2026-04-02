import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_surfspot.nl_fq0', ['https://www.surfspot.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
