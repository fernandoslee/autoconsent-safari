import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_one-bath.de_eqj', ['https://www.one-bath.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
