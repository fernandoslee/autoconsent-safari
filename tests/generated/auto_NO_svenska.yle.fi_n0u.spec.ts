import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_svenska.yle.fi_n0u', ['https://svenska.yle.fi/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
