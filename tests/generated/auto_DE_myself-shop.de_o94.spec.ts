import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_myself-shop.de_o94', ['https://myself-shop.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
