import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_h-und.ch_9zv', ['https://www.h-und.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
