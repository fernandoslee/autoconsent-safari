import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_jobs.drk.de_998', ['https://jobs.drk.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
