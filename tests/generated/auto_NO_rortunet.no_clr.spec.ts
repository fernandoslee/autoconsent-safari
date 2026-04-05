import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_rortunet.no_clr', ['https://www.rortunet.no/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
