import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_selph.co.uk_wlm', ['https://www.selph.co.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
