import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_tper.it_7oz', ['https://www.tper.it/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
