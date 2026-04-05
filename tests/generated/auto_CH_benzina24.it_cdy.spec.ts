import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_benzina24.it_cdy', ['https://www.benzina24.it/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
