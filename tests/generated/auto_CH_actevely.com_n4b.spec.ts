import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_actevely.com_n4b', ['https://actevely.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
