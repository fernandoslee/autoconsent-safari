import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_jobs-ete.com_q3g', ['https://www.jobs-ete.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
