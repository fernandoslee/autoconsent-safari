import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_oeiras.pt_w5a', ['https://www.oeiras.pt/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
