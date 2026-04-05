import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_upasana.de_y3r', ['https://upasana.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
