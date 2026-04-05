import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_npf-gruppen.se_zv2', ['https://npf-gruppen.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
