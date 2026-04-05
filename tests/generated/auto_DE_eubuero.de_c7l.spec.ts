import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_eubuero.de_c7l', ['https://www.eubuero.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
