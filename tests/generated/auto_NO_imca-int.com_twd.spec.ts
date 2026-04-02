import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_imca-int.com_twd', ['https://www.imca-int.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
