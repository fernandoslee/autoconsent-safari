import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_zehrer.at_la4', ['https://www.zehrer.at/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
