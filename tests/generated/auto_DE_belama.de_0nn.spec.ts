import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_belama.de_0nn', ['https://www.belama.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
