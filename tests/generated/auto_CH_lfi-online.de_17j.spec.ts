import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_lfi-online.de_17j', ['https://lfi-online.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
