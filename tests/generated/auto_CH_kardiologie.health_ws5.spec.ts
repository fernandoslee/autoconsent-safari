import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_CH_kardiologie.health_ws5', ['https://kardiologie.health/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['CH'],
});
