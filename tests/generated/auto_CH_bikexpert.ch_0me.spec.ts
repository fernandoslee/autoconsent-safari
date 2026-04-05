import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bikexpert.ch_0me', ['https://www.bikexpert.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
