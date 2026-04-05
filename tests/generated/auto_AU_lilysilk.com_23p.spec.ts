import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_lilysilk.com_23p', ['https://www.lilysilk.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
