import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_waschguru.de_2c3', ['https://www.waschguru.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
