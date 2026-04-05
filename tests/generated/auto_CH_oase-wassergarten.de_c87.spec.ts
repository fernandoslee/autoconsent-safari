import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_oase-wassergarten.de_c87', ['https://www.oase-wassergarten.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
