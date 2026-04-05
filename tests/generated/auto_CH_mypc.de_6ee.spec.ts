import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_mypc.de_6ee', ['https://mypc.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
