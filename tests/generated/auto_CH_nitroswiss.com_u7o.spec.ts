import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_nitroswiss.com_u7o', ['https://nitroswiss.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['CH'] });
