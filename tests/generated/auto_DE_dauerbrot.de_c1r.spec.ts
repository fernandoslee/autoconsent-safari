import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_dauerbrot.de_c1r', ['https://www.dauerbrot.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
