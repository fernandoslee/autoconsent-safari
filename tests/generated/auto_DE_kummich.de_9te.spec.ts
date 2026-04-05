import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kummich.de_9te', ['https://www.kummich.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
