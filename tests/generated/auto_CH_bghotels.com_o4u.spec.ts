import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bghotels.com_o4u', ['https://www.bghotels.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
