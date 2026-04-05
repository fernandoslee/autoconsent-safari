import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_video125.com_tp1', ['https://www.video125.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
