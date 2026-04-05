import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_taquilla.com_ng6', ['https://www.taquilla.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
