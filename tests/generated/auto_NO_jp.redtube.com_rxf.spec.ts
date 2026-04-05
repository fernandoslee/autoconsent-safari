import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_jp.redtube.com_rxf', ['https://jp.redtube.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
