import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_habrita.com_6qt', ['https://habrita.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
