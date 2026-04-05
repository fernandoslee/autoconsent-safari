import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_csn.se_uog', ['https://www.csn.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
