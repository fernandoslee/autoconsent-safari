import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_zonecouture.fr_gm6', ['https://www.zonecouture.fr/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
