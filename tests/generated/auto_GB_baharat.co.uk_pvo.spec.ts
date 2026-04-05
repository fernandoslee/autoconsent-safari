import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_baharat.co.uk_pvo', ['https://baharat.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
