import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_galilee.ac_myj', ['https://galilee.ac/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
