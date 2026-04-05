import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_busschmiede.de_j6y', ['https://busschmiede.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
