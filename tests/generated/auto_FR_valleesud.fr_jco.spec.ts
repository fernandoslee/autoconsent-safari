import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_valleesud.fr_jco', ['https://www.valleesud.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
