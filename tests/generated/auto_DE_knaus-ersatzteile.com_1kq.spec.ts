import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_knaus-ersatzteile.com_1kq', ['https://www.knaus-ersatzteile.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
