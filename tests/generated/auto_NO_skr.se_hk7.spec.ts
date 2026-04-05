import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_skr.se_hk7', ['https://skr.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
