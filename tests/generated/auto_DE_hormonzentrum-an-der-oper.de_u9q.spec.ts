import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_hormonzentrum-an-der-oper.de_u9q', ['https://hormonzentrum-an-der-oper.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
