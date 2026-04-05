import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_fragfitty.de_4hp', ['https://fragfitty.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
