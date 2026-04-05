import generateCMPTests from '../../playwright/runner';
generateCMPTests('auto_DE_geistes-und-sozialwissenschaften-bmftr.de_km4', ['https://www.geistes-und-sozialwissenschaften-bmftr.de/'], {
    testOptIn: false,
    testSelfTest: true,
    onlyRegions: ['DE'],
});
