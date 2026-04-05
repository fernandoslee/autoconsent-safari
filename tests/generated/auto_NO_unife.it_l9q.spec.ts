import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_unife.it_l9q', ['https://www.unife.it/it'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
