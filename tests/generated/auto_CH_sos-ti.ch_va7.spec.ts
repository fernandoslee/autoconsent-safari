import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_sos-ti.ch_va7', ['https://www.sos-ti.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
