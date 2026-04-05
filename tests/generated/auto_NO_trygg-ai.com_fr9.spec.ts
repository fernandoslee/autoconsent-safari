import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_trygg-ai.com_fr9', ['https://trygg-ai.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['NO'] });
