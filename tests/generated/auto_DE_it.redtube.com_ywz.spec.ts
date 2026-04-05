import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_it.redtube.com_ywz', ['https://it.redtube.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
