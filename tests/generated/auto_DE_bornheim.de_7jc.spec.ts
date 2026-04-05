import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bornheim.de_7jc', ['https://www.bornheim.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
