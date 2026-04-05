import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_iwood.co.uk_9lf', ['https://www.iwood.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
