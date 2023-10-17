import { dayIsBetween } from '@/common/day';

describe('dayIsBetween', () => {
  test('After', () => {
    /**
     * timeA
     *        |-----|
     * |-----|
     * timeB
     */
    const timeA = ['11:00', '13:00'];
    const timeB = ['06:00', '07:00'];
    expect(dayIsBetween(timeA, timeB)).toBe(false);
  });
  test('StartTouching', () => {
    /**
     * timeA
     *       |-----|
     * |-----|
     * timeB
     */
    const timeA = ['11:00', '13:00'];
    const timeB = ['06:00', '11:00'];
    expect(dayIsBetween(timeA, timeB)).toBe(false);
  });

  test('StartInside', () => {
    /**
     * timeA
     *     |-----|
     * |-----|
     * timeB
     */
    const timeA = ['11:00', '13:00'];
    const timeB = ['06:00', '12:00'];
    expect(dayIsBetween(timeA, timeB)).toBe(true);
  });


  test('InsideStartTouching', () => {
    /**
     * timeA
     * |-----|
     * |--------|
     * timeB
     */
    const timeA = ['11:00', '13:00'];
    const timeB = ['11:00', '16:00'];
    expect(dayIsBetween(timeA, timeB)).toBe(true);
  });

  test('EnclosingStartTouching', () => {
    /**
     * timeA
     * |-----|
     * |---|
     * timeB
     */
    const timeA = ['11:00', '13:00'];
    const timeB = ['11:00', '12:00'];
    expect(dayIsBetween(timeA, timeB)).toBe(true);
  });

  test('Enclosing', () => {
    /**
     * timeA
     * |-----|
     *  |---|
     * timeB
     */
    const timeA = ['11:00', '13:00'];
    const timeB = ['11:30', '12:30'];
    expect(dayIsBetween(timeA, timeB)).toBe(true);
  });

  test('EnclosingEndTouching', () => {
    /**
     * timeA
     * |-----|
     *   |---|
     * timeB
     */
    const timeA = ['11:00', '13:00'];
    const timeB = ['12:00', '13:00'];
    expect(dayIsBetween(timeA, timeB)).toBe(true);
  });

  test('ExactMatch', () => {
    /**
     * timeA
     * |-----|
     * |-----|
     * timeB
     */
    const timeA = ['11:00', '13:00'];
    const timeB = ['11:00', '13:00'];
    expect(dayIsBetween(timeA, timeB)).toBe(true);
  });

  test('Inside', () => {
    /**
     * timeA
     *  |---|
     * |-----|
     * timeB
     */
    const timeA = ['11:00', '13:00'];
    const timeB = ['10:00', '14:00'];
    expect(dayIsBetween(timeA, timeB)).toBe(true);
  });

  test('InsideEndTouching', () => {
    /**
     * timeA
     *   |-----|
     * |-------|
     * timeB
     */
    const timeA = ['11:00', '13:00'];
    const timeB = ['10:00', '13:00'];
    expect(dayIsBetween(timeA, timeB)).toBe(true);
  });

  test('EndInside', () => {
    /**
     * timeA
     * |-----|
     *   |-----|
     * timeB
     */
    const timeA = ['11:00', '13:00'];
    const timeB = ['12:00', '14:00'];
    expect(dayIsBetween(timeA, timeB)).toBe(true);
  });

  test('EndTouching', () => {
    /**
     * timeA
     * |-----|
     *       |-----|
     * timeB
     */
    const timeA = ['11:00', '13:00'];
    const timeB = ['13:00', '14:00'];
    expect(dayIsBetween(timeA, timeB)).toBe(false);
  });

  test('Before', () => {
    /**
     * timeA
     * |-----|
     *         |-----|
     * timeB
     */
    const timeA = ['11:00', '13:00'];
    const timeB = ['14:00', '15:00'];
    expect(dayIsBetween(timeA, timeB)).toBe(false);
  });

});
