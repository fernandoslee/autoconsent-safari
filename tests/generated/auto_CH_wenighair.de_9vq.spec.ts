import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_wenighair.de_9vq', ['https://wenighair.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
