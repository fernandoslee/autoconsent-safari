import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_FR_pokewordle.app_wl1', ['https://www.pokewordle.app/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['FR'],
});
