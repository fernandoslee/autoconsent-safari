import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_participe.nu_bpr', ['https://www.participe.nu/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
