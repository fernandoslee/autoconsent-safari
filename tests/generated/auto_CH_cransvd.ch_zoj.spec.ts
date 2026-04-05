import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_cransvd.ch_zoj', ['https://www.cransvd.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
