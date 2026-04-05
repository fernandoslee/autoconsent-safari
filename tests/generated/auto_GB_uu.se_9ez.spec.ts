import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_uu.se_9ez', ['https://www.uu.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
