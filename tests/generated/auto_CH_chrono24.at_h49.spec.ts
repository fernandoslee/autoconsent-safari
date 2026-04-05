import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_chrono24.at_h49', ['https://www.chrono24.at/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
