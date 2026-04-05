import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_pedalerie.ch_c23', ['https://www.pedalerie.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
