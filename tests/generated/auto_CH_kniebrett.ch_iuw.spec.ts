import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_kniebrett.ch_iuw', ['https://www.kniebrett.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
