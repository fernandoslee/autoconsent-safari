import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_socs.tech_hfm', ['https://socs.tech/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
