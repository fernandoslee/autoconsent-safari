import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_wandlitz.de_jcr', ['https://www.wandlitz.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
