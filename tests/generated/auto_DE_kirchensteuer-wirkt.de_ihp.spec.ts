import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_kirchensteuer-wirkt.de_ihp', ['https://www.kirchensteuer-wirkt.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
