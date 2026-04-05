import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_djv.de_2j6', ['https://www.djv.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
