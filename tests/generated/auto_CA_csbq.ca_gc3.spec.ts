import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_csbq.ca_gc3', ['https://csbq.ca/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
