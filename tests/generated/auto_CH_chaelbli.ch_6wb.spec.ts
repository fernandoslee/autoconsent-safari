import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_chaelbli.ch_6wb', ['https://www.chaelbli.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
