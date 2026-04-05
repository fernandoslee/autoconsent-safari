import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_glo24.de_brk', ['https://www.glo24.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
