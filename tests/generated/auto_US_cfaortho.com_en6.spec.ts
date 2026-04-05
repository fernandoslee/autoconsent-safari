import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_US_cfaortho.com_en6', ['https://www.cfaortho.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['US'] });
