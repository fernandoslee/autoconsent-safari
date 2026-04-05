import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_paperguru.de_cxx', ['https://www.paperguru.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
