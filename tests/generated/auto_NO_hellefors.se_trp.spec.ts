import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_hellefors.se_trp', ['https://www.hellefors.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
