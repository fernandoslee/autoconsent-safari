import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_ladarbia.com_8iv', ['https://ladarbia.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
