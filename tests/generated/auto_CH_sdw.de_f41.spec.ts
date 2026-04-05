import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_sdw.de_f41', ['https://www.sdw.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
