import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_docs.tigera.io_o2s', ['https://docs.tigera.io/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
