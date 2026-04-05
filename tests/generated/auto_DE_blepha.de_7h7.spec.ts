import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_blepha.de_7h7', ['https://blepha.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
