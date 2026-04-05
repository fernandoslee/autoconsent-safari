import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_rayher.com_nme', ['https://www.rayher.com/de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
