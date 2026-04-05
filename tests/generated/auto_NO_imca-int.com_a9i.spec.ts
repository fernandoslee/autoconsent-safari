import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_imca-int.com_a9i', ['https://www.imca-int.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
