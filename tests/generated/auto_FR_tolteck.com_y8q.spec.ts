import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_tolteck.com_y8q', ['https://www.tolteck.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
