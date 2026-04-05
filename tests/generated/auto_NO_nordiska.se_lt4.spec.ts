import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_nordiska.se_lt4', ['https://www.nordiska.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
