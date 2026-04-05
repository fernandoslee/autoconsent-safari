import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_jobs.ac.uk_wuc', ['https://www.jobs.ac.uk/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['AU'] });
