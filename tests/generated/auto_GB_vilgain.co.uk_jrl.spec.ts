import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_vilgain.co.uk_jrl', ['https://vilgain.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
