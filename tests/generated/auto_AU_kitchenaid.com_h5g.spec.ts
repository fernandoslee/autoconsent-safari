import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_kitchenaid.com_h5g', ['http://www.kitchenaid.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
