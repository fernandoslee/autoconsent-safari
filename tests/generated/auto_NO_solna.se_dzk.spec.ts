import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_solna.se_dzk', ['https://www.solna.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
