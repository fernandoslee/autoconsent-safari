import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_kane.fr_kbl', ['https://www.kane.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
