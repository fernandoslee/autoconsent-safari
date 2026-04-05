import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_fnigc.ca_r6h', ['https://fnigc.ca/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
