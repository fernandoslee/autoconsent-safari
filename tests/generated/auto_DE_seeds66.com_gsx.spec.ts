import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_seeds66.com_gsx', ['https://www.seeds66.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
