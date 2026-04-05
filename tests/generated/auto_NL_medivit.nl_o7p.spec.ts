import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_medivit.nl_o7p', ['https://www.medivit.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
