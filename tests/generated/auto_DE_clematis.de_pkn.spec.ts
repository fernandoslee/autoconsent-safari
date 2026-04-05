import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_clematis.de_pkn', ['https://www.clematis.de/'], { testOptIn: false, testSelfTest: true, onlyRegions: ['DE'] });
