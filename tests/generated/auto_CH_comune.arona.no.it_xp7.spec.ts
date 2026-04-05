import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_comune.arona.no.it_xp7', ['https://comune.arona.no.it/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
