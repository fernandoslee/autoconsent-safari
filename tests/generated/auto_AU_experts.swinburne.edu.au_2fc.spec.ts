import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_AU_experts.swinburne.edu.au_2fc', ['https://experts.swinburne.edu.au/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['AU'],
});
