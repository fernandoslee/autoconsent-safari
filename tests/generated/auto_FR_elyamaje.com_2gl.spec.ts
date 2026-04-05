import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_elyamaje.com_2gl', ['https://www.elyamaje.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
