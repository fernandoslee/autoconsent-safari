import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_brandenburgertheater.de_dpe', ['https://brandenburgertheater.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
