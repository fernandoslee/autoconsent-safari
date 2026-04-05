import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_my-steel.de_9ig', ['https://www.my-steel.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
