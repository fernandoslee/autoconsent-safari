import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_alvsbyhus.se_1sh', ['https://www.alvsbyhus.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
