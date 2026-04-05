import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_NO_altinn.com_d7p', ['https://24x.no/en/products/altinncom-is-for-sale'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['NO'],
});
