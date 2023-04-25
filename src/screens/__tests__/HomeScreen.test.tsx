import React from 'react';
import '@testing-library/react-native/dont-cleanup-after-each';
import { render, screen, fireEvent, act, cleanup, waitFor } from '@testing-library/react-native';
import HomeScreen from '../HomeScreen';

describe('Home Screen', () => {
  let renderedComponent: any;
  beforeAll(() => {
    renderedComponent = render(<HomeScreen />);
  });
  afterAll(() => {
    cleanup();
  });
  test('should render', () => {
    act(() => {
      const { toJSON } = renderedComponent;
      expect(toJSON()).toMatchSnapshot();
    });
  });
  describe('When user open home screen', () => {
    test('then it should show Eslint example text', () => {
      expect(screen.getByText('EsLint Example')).toBeDefined();
    });
  });
});
