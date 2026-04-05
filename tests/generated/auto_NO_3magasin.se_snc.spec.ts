import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_3magasin.se_snc', ['https://www.3magasin.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
