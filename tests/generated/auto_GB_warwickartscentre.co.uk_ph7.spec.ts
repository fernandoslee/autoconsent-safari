import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_warwickartscentre.co.uk_ph7', ['https://www.warwickartscentre.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
