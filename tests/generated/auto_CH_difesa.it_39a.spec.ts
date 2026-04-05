import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_difesa.it_39a', ['https://www.difesa.it/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
