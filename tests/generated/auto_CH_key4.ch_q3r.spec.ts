import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_key4.ch_q3r', ['https://key4.ch/en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
