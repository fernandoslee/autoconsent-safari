import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_lcfc.com_4iq', ['https://www.lcfc.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
