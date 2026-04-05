import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_transisienergiberkeadilan.id_9ry', ['https://transisienergiberkeadilan.id/id'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
