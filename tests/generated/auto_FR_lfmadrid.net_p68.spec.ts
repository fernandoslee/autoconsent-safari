import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lfmadrid.net_p68', ['https://www.lfmadrid.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
