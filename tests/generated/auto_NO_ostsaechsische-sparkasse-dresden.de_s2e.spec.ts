import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_ostsaechsische-sparkasse-dresden.de_s2e', ['https://www.ostsaechsische-sparkasse-dresden.de/de/home.html'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
