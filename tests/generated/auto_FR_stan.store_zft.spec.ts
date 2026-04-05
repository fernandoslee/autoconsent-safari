import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_stan.store_zft', ['https://www.stan.store/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
