import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_holzplatz.de_a17', ['https://www.holzplatz.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
