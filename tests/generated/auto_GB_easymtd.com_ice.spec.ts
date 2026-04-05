import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_easymtd.com_ice', ['https://easymtd.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['GB'] });
