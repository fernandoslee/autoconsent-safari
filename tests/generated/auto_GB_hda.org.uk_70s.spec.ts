import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_hda.org.uk_70s', ['https://www.hda.org.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
