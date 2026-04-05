import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_jobs.obi.de_usf', ['https://jobs.obi.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
