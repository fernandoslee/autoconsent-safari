import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_GB_gws-led.co.uk_5r3', ['https://www.gws-led.co.uk/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['GB'],
});
