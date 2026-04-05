import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_ors.nu_fpn', ['https://www.ors.nu/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
