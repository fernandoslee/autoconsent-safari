import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_xdress.co.uk_mtt', ['https://xdress.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
