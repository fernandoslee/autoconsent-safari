import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_centraalbeheer.nl_5zr', ['https://www.centraalbeheer.nl/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
