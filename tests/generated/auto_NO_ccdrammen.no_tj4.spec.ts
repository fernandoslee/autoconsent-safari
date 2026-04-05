import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_ccdrammen.no_tj4', ['https://www.ccdrammen.no/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
