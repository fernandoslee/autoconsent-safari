import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_holzsauna.ch_o2w', ['https://www.holzsauna.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
