import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_engelmt.de_qtc', ['https://www.engelmt.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
