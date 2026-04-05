import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_mybotshop.de_m57', ['https://www.mybotshop.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
