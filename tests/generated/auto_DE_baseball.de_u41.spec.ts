import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_baseball.de_u41', ['https://www.baseball.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
