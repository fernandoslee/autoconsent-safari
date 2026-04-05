import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_difesa.it_hzz', ['https://www.difesa.it/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
