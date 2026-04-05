import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kraftklub.to_bl8', ['https://shop.kraftklub.to/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
