import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bikestop.ch_esp', ['https://www.bikestop.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
