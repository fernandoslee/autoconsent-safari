import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_olibetta.ch_yr1', ['https://www.olibetta.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
