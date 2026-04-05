import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_band.us_de4', ['https://www.band.us/home'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
