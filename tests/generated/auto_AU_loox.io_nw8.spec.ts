import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_loox.io_nw8', ['https://loox.app/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
