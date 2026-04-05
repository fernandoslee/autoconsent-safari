import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_freysta.com_x2b', ['https://freysta.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
