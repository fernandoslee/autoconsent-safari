import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_kodansha.us_hh0', ['https://kodansha.us/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
