import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kivanta.de_kii', ['https://www.kivanta.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
