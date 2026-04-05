import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_lansfast.se_chm', ['https://www.lansfast.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
