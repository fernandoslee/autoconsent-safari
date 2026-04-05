import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_paiefacile.ca_ka0', ['https://paiefacile.ca/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
