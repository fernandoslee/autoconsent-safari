import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NL_venduhuisdeeland.nl_ie7', ['https://www.venduhuisdeeland.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NL'],
});
