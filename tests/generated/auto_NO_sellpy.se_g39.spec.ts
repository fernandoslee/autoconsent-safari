import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_sellpy.se_g39', ['https://www.sellpy.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
