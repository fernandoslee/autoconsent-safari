import generateCMPTests from '../playwright/runner';

generateCMPTests('didomi', ['https://nothing.tech/', 'https://www.planet.fr/', 'http://www.allocine.fr/', 'https://www.boursorama.com/'], {
    testOptIn: false,
    testSelfTest: false,
    skipRegions: ['US'],
});
