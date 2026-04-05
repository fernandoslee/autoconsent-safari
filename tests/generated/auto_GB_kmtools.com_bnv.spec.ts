import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_kmtools.com_bnv', ['https://kmtools.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
