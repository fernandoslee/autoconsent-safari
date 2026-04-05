import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_borex.ch_ofe', ['https://www.borex.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
