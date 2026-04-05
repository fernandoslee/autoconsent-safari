import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_smashme.de_p1l', ['https://smashme.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
