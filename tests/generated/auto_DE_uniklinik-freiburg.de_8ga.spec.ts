import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_uniklinik-freiburg.de_8ga', ['https://www.uniklinik-freiburg.de/de.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
