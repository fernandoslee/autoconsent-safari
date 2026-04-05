import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_webling.ch_bdv', ['https://www.webling.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
