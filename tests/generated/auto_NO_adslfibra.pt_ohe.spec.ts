import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_adslfibra.pt_ohe', ['https://adslfibra.pt/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
