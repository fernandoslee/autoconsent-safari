import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_loulou.no_zdk', ['https://loulou.no/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
