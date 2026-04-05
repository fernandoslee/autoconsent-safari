import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_infoelba.net_bdu', ['https://www.infoelba.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
