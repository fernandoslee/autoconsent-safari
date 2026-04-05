import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_amal.se_aqn', ['https://amal.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
