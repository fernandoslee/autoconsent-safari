import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_rematch.tv_p0g', ['https://www.rematch.tv/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
