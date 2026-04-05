import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_tcec-chess.com_am9', ['https://tcec-chess.com/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
