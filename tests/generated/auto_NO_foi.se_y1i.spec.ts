import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_foi.se_y1i', ['https://www.foi.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
