import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_riopool.se_w77', ['https://riopool.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
