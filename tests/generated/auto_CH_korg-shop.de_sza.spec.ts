import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_korg-shop.de_sza', ['https://www.korg-shop.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
