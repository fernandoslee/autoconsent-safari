import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_bgfg.de_zm0', ['https://www.bgfg.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
