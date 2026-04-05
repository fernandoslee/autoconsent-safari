import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_uu.se_l7c', ['https://www.uu.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
