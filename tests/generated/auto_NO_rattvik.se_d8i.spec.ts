import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_rattvik.se_d8i', ['https://www.rattvik.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
