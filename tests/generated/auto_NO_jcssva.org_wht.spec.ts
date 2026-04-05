import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_jcssva.org_wht', ['https://jcssva.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
