import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_nalinascat.com_d4v', ['https://nalinascat.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
