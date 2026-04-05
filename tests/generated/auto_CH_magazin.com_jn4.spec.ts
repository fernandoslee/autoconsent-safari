import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_magazin.com_jn4', ['https://www.magazin.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
