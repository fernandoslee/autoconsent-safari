import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_sas.se_wga', ['https://www.sas.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
