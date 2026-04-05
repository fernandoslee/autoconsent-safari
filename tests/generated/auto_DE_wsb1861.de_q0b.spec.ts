import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_wsb1861.de_q0b', ['https://www.wsb1861.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
