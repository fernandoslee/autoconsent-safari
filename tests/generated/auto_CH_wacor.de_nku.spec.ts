import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_wacor.de_nku', ['https://wacor.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
