import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_casatavoni.it_dn6', ['https://casatavoni.it/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
