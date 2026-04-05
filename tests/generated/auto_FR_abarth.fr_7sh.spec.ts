import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_abarth.fr_7sh', ['https://www.abarth.fr/?adobe_mc_ref='], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
