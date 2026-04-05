import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_vegdog.de_o3n', ['https://www.vegdog.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
