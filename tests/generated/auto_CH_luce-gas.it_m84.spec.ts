import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_luce-gas.it_m84', ['https://luce-gas.it/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
