import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_nzbking.com_e9n', ['https://www.nzbking.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
