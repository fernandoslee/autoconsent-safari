import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_uu.se_suz', ['https://www.uu.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
