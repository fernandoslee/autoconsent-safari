import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_evocamp.de_leo', ['https://evocamp.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
