import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_resume.io_qql', ['https://resume.io/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
