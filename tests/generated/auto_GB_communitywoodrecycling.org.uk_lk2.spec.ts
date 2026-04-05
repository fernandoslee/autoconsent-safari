import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_communitywoodrecycling.org.uk_lk2', ['https://communitywoodrecycling.org.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
