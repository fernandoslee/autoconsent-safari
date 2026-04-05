import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_bng-shop.de_rd6', ['https://www.bng-shop.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
