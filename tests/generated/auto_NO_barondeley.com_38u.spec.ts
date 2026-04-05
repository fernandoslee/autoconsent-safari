import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_barondeley.com_38u', ['https://barondeley.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
