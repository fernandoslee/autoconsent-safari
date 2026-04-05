import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_nutrexin.ch_za8', ['https://nutrexin.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
