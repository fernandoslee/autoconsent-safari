import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_zepto-solar.de_uqu', ['https://zepto-solar.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
