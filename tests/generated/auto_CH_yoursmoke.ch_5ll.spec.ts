import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_yoursmoke.ch_5ll', ['https://yoursmoke.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
