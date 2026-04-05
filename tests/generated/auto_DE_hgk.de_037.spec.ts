import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hgk.de_037', ['https://www.hgk.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
