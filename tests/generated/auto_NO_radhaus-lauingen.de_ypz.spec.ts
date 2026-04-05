import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_radhaus-lauingen.de_ypz', ['https://www.radhaus-lauingen.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
