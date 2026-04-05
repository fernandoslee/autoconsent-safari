import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_dca.org.uk_sdu', ['https://www.dca.org.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
