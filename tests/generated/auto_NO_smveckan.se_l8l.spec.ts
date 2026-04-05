import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_smveckan.se_l8l', ['https://smveckan.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
