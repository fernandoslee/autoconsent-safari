import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_ul.se_w3b', ['https://www.ul.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
