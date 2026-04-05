import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_foestats.com_1w9', ['https://foestats.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
