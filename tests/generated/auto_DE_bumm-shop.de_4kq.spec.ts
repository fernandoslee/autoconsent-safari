import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bumm-shop.de_4kq', ['https://www.bumm-shop.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
