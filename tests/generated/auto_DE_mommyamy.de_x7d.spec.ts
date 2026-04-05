import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_mommyamy.de_x7d', ['https://www.mommyamy.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
