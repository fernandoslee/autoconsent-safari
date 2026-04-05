import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_wearefudi.com_32d', ['https://wearefudi.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
