import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_mennour.com_p5u', ['https://mennour.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
