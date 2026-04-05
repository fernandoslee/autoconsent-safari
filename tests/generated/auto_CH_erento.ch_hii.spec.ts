import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_erento.ch_hii', ['https://www.erento.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
