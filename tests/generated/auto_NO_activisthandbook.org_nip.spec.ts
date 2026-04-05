import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_activisthandbook.org_nip', ['https://activisthandbook.org/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
