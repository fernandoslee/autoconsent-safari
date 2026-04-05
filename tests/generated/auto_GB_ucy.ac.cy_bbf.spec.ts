import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_ucy.ac.cy_bbf', ['https://www.ucy.ac.cy/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
