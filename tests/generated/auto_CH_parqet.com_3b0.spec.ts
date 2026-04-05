import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_parqet.com_3b0', ['https://parqet.com/de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
