import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_sifweb.org_z32', ['https://www.sifweb.org/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
