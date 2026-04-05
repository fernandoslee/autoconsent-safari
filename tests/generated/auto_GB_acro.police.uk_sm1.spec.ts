import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_acro.police.uk_sm1', ['https://acro.police.uk/s/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
