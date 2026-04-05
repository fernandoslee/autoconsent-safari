import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_jobs.pwc.de_jjg', ['https://jobs.pwc.de/de/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
