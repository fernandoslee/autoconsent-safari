import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_mingsprooch.de_ltk', ['https://mingsprooch.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
