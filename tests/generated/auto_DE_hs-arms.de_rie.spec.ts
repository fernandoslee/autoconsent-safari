import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hs-arms.de_rie', ['https://hs-arms.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
