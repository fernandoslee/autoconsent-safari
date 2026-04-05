import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_loyola.ca_rot', ['https://loyola.ca/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
