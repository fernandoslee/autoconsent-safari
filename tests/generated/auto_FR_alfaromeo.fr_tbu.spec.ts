import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_alfaromeo.fr_tbu', ['https://www.alfaromeo.fr/?adobe_mc_ref='], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
