import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_experts.exeter.ac.uk_3c9', ['https://experts.exeter.ac.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
