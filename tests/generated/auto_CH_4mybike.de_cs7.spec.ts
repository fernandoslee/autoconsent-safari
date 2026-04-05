import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_4mybike.de_cs7', ['https://4mybike.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
