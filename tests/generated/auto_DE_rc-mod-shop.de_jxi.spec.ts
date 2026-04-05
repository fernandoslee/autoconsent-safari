import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_rc-mod-shop.de_jxi', ['https://rc-mod-shop.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
