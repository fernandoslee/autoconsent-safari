import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_albainox.com_7r2', ['https://www.albainox.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
