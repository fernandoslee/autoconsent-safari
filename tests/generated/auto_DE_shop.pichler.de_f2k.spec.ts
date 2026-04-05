import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_shop.pichler.de_f2k', ['https://pichler.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
