import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_thesweetstore.co.uk_9o7', ['https://www.thesweetstore.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
