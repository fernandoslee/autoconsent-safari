import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_weingut-gehlen.de_uej', ['https://www.weingut-gehlen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
