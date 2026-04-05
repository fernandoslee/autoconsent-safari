import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_web.unica.it_ey7', ['https://web.unica.it/unica/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
