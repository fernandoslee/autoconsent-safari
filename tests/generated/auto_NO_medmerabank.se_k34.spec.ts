import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_medmerabank.se_k34', ['https://medmerabank.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
