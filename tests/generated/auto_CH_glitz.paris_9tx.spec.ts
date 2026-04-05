import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_glitz.paris_9tx', ['https://www.glitz.paris/en'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
