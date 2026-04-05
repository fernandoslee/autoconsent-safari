import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_kolping-friedenswanderung2026.de_jju', ['https://kolping-friedenswanderung2026.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
