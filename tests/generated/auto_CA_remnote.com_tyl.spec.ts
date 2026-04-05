import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_remnote.com_tyl', ['https://www.remnote.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
