import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_interiorbutikker.no_icx', ['https://www.interiorbutikker.no/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
