import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_shirtz.cool_ivb', ['https://shirtz.cool/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
