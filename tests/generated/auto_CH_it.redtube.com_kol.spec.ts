import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_it.redtube.com_kol', ['https://it.redtube.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
