import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_utmost.co.uk_0', ['https://www.utmost.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
