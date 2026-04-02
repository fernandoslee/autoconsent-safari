import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_experts.exeter.ac.uk_e20', ['https://experts.exeter.ac.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
