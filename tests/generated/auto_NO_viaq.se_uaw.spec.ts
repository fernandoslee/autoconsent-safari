import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_viaq.se_uaw', ['https://viaq.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
