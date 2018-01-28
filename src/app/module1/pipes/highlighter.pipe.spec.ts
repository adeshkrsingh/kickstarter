import { HighlighterPipe } from './highlighter.pipe';

describe('HighlighterPipe', () => {
  it('create an instance', () => {
    const pipe = new HighlighterPipe();
    expect(pipe).toBeTruthy();
  });

  it('should add bold tag with the string', () => {
    const pipe = new HighlighterPipe();
    expect(pipe.transform('Adesh Singh', 'Ade')).toEqual('<b>Ade</b>sh Singh');
  });

  it('should add bold tag with the string second', () => {
    const pipe = new HighlighterPipe();
    expect(pipe.transform('Adesh Singh', 'Kr')).toEqual('Adesh Singh');
  });
});
