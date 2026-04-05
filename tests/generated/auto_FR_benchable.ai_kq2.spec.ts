import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_benchable.ai_kq2', ['https://benchable.ai/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['FR'] });
