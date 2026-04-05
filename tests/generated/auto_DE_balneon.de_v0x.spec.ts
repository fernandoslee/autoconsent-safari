import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_balneon.de_v0x', ['https://www.balneon.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
