import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_octopuslegacy.com_2kr', ['https://octopuslegacy.com/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
