import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_tabakoutlet.ch_d21', ['https://tabakoutlet.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
