import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_pietsmiet.de_wqk', ['https://pietsmiet.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
