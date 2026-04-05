import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_overleden.net_x2i', ['https://overleden.net/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
