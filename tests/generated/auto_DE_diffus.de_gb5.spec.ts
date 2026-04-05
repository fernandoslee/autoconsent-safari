import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_diffus.de_gb5', ['https://diffus.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
