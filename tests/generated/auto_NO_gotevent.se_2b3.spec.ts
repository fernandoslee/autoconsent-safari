import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_gotevent.se_2b3', ['https://gotevent.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
