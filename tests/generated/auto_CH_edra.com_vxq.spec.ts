import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_edra.com_vxq', ['https://www.edra.com/it/home'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
