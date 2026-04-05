import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_sd68.bc.ca_5xh', ['https://www.sd68.bc.ca/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
