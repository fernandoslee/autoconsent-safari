import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_drivalia.co.uk_1lj', ['https://drivalia.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
