import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_mio.se_aki', ['https://www.mio.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
