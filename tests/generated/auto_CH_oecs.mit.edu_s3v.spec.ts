import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_oecs.mit.edu_s3v', ['https://oecs.mit.edu/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
