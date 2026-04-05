import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_sbg.lko.at_9ew', ['https://sbg.lko.at/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
