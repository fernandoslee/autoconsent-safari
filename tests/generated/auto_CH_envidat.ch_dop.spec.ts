import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_envidat.ch_dop', ['https://www.envidat.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
