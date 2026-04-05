import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_jeep.fr_oq9', ['https://www.jeep.fr/?adobe_mc_ref='], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
