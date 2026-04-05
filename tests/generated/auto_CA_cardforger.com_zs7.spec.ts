import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_cardforger.com_zs7', ['https://cardforger.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
