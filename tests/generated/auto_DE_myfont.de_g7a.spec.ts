import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_myfont.de_g7a', ['http://www.myfont.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
