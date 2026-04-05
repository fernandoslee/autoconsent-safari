import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_agruber.com_rfo', ['https://agruber.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
