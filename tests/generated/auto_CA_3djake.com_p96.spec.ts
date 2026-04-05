import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CA_3djake.com_p96', ['https://www.3djake.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CA'] });
