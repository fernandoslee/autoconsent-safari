import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_anduril.com_60u', ['https://www.anduril.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
