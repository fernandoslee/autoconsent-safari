import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_usato.ch_099', ['https://www.usato.ch/it/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
