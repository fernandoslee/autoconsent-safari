import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_3pagen.de_6x0', ['https://www.3pagen.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
