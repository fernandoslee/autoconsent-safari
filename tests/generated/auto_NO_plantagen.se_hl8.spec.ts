import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_plantagen.se_hl8', ['https://plantagen.se/se'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
