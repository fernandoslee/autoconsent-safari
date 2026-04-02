import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_galilee.ac_o9s', ['https://galilee.ac/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
