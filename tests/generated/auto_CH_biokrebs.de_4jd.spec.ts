import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_biokrebs.de_4jd', ['https://www.biokrebs.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
