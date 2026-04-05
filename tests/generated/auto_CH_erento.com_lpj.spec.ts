import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_erento.com_lpj', ['https://www.erento.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
