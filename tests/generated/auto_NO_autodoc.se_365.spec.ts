import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_autodoc.se_365', ['https://www.autodoc.se/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
