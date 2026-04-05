import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_cawst.org_ngk', ['https://www.cawst.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
