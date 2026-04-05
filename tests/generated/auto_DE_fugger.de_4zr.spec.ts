import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fugger.de_4zr', ['https://www.fugger.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
