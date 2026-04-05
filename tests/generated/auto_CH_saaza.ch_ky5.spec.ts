import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_saaza.ch_ky5', ['https://www.saaza.ch/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
