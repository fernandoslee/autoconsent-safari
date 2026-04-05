import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_stangl-shop.de_p4i', ['https://stangl-shop.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
