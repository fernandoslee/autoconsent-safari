import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_kaaspakhuis.nl_4dm', ['https://kaaspakhuis.nl/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NL'] });
