import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_falkenberg.se_4fe', ['https://falkenberg.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
