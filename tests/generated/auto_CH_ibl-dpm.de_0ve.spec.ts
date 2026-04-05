import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ibl-dpm.de_0ve', ['https://ibl-dpm.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
