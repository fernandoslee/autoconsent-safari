import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_gyhockey.com_qyd', ['https://www.gyhockey.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
