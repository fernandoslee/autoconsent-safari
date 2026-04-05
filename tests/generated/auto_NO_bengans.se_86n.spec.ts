import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_bengans.se_86n', ['https://www.bengans.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
