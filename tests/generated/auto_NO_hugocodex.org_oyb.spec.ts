import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_hugocodex.org_oyb', ['https://hugocodex.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
