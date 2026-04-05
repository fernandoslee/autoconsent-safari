import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_yosepower.com_4g9', ['https://yosepower.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
