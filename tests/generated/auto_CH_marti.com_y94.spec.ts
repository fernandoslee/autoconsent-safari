import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_marti.com_y94', ['https://www.marti.com/ch_en/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
