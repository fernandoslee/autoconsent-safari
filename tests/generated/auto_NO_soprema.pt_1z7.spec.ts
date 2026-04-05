import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_soprema.pt_1z7', ['https://www.soprema.pt/pt/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
