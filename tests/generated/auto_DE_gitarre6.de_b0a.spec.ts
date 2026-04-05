import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_gitarre6.de_b0a', ['https://www.gitarre6.de/de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
