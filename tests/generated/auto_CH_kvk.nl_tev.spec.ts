import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_kvk.nl_tev', ['https://www.kvk.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
