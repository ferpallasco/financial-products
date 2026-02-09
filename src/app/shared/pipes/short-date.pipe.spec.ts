import { ShortDatePipe } from './short-date.pipe';

describe('ShortDatePipe', () => {
  it('create an instance', () => {
    const pipe = new ShortDatePipe();
    expect(pipe).toBeTruthy();
  });

  describe('ShortDatePipe', () => {
    let pipe: ShortDatePipe;

    beforeEach(() => {
      pipe = new ShortDatePipe();
    });

    it('create an instance', () => {
      expect(pipe).toBeTruthy();
    });

    it('returns null for null input', () => {
      const transformedDate = pipe.transform(null);
      expect(transformedDate).toBeNull();
    });

    it('returns null for empty string input', () => {
      const transformedDate = pipe.transform('');
      expect(transformedDate).toBeNull();
    });

    it('returns formatted string', () => {
      const date = '2022-13-01T00:00:00Z';
      const transformedDate = pipe.transform(date);
      expect(transformedDate).toEqual('2022/13/01');
    });
  });
});
