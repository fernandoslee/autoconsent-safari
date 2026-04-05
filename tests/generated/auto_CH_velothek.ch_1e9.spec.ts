import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_velothek.ch_1e9', ['https://www.velothek.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
