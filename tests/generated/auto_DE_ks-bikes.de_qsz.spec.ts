import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ks-bikes.de_qsz', ['https://www.ks-bikes.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
