import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_sbab.se_kb6', ['https://www.sbab.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
