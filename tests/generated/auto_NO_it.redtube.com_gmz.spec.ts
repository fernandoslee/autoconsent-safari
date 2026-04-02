import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_it.redtube.com_gmz', ['https://it.redtube.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
