import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_monpacha.fr_js9', ['https://monpacha.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
