import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_skyrc.com_g64', ['https://www.skyrc.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
