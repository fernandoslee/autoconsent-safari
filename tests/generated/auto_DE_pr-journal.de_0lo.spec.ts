import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_pr-journal.de_0lo', ['https://pr-journal.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
