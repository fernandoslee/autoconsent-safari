import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_sequoiacap.com_d3x', ['https://sequoiacap.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
