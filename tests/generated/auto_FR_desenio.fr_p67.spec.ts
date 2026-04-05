import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_desenio.fr_p67', ['https://desenio.fr/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
