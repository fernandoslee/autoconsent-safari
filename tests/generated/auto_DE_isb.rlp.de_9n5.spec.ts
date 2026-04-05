import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_isb.rlp.de_9n5', ['https://isb.rlp.de/home.html'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
