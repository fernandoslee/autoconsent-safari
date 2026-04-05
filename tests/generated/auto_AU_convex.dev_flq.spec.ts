import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_convex.dev_flq', ['https://www.convex.dev/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
