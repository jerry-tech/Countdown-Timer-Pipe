import { CountdownPipe } from './count-down.pipe';

describe('CountdownPipe', () => {
  it('create an instance', () => {
    const pipe = new CountdownPipe();
    expect(pipe).toBeTruthy();
  });
});
