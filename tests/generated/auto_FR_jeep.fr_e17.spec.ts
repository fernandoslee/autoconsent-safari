import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_jeep.fr_e17', ['https://www.jeep.fr/?adobe_mc_ref='], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
