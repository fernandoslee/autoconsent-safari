import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_alpgenuss.de_hkb', ['https://www.alpgenuss.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
