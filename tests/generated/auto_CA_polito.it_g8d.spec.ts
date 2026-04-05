import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_polito.it_g8d', ['https://www.polito.it/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
