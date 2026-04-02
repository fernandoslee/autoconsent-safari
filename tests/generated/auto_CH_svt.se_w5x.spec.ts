import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_svt.se_w5x', ['https://www.svt.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
