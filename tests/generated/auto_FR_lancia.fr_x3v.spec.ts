import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_lancia.fr_x3v', ['https://www.lancia.fr/?adobe_mc_ref='], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
