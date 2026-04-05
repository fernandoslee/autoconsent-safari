import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_collier-turf-care.co.uk_2x6', ['https://www.collier-turf-care.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
