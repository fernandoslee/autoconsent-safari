import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_pff.de_lm5', ['https://www.pff.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
