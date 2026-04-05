import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_ardmed.de_qw3', ['https://www.ardmed.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
