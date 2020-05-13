import { FirestorePipe } from './firestore.pipe';

describe('FirestorePipe', () => {
  it('create an instance', () => {
    const pipe = new FirestorePipe();
    expect(pipe).toBeTruthy();
  });
});
