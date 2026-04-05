import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_curasol.de_2mn', ['https://www.curasol.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
