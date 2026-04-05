import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_level.co_fpe', ['https://level.co/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
