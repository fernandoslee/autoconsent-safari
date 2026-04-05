import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_sagrusan.com_xtw', ['https://sagrusan.com/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
