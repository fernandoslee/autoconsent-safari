import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_vistec.ch_bsw', ['https://www.vistec.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
