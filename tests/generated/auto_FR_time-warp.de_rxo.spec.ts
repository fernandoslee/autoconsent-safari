import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_time-warp.de_rxo', ['https://www.time-warp.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
