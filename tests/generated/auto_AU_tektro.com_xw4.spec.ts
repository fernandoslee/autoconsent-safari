import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_tektro.com_xw4', ['https://www.tektro.com/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
