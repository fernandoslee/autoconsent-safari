import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_kickbike.se_gsz', ['https://www.kickbike.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
