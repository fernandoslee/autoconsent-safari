import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_infoelba.it_v28', ['https://www.infoelba.it/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
