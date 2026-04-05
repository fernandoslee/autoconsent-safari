import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_textilstore.de_tku', ['https://textilstore.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
