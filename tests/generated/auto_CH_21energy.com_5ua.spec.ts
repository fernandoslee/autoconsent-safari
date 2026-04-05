import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_21energy.com_5ua', ['https://21energy.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
