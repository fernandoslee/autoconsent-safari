import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_jobs.thalia.de_sup', ['https://jobs.thalia.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
