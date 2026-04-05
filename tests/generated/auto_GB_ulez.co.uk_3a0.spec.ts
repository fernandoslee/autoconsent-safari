import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_ulez.co.uk_3a0', ['https://ulez.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
