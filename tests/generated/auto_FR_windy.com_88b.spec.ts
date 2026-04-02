import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_windy.com_88b', ['https://www.windy.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
