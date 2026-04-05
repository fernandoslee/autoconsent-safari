import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_pia-planer.ch_1nk', ['https://pia-planer.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
