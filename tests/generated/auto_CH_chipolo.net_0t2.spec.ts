import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_chipolo.net_0t2', ['https://chipolo.net/de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
