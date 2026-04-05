import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_decks.de_1d6', ['https://www.decks.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
