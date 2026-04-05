import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_corax-store.se_yhq', ['https://corax-store.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
