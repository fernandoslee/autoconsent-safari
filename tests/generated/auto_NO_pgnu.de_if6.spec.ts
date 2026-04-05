import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_pgnu.de_if6', ['https://www.pgnu.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
