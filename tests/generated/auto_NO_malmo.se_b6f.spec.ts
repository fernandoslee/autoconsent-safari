import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_malmo.se_b6f', ['https://malmo.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
