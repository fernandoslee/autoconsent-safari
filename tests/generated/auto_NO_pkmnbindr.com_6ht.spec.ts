import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_pkmnbindr.com_6ht', ['https://www.pkmnbindr.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
