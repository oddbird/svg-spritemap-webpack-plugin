import fs from 'fs';
import path from 'path';
import SVGSpritemapPlugin from '../svg-spritemap';

describe('The \'generateSVG()\' method', () => {
    it('Returns \'undefined\' when no files are specified', () => {
        const plugin = new SVGSpritemapPlugin;

        expect(plugin.generateSVG([])).toBeUndefined();
    });

    it(`Transforms a single file correctly`, () => {
        const plugin = new SVGSpritemapPlugin;
        const output = fs.readFileSync(path.join(__dirname, 'output/single.svg'), 'utf-8');

        expect(plugin.generateSVG([
            path.join(__dirname, 'input/single.svg')
        ])).toEqual(output.trim());
    });

    it(`Transforms multiple files correctly`, () => {
        const plugin = new SVGSpritemapPlugin;
        const output = fs.readFileSync(path.join(__dirname, 'output/multiple.svg'), 'utf-8');

        expect(plugin.generateSVG([
            path.join(__dirname, 'input/multiple-a.svg'),
            path.join(__dirname, 'input/multiple-b.svg')
        ])).toEqual(output.trim());
    });
});