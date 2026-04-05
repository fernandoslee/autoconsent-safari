import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_zu.de_nb9', ['https://www.zu.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
