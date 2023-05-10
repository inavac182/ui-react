import React from 'react';

import { screen, fireEvent } from '@testing-library/react';

import { uiRender } from '../../../__tests__/utils/render';
import { UiInput } from '../src';

describe('<Component />', () => {
  it('renders fine with label', () => {
    uiRender(<UiInput label="Input" name="MyInput" />);

    expect(screen.getByRole('textbox', { name: 'Input' })).toBeVisible();
  });

  it('renders fine when label is on top', () => {
    uiRender(<UiInput label="Input" labelOnTop />);

    expect(screen.getByRole('textbox', { name: 'Input' })).toBeVisible();
  });

  it('renders fine with placeholder', () => {
    uiRender(<UiInput placeholder="Input placeholder" />);

    expect(screen.getByRole('textbox')).toBeVisible();
  });

  it('renders error message', () => {
    uiRender(<UiInput error="Some error" />);

    expect(screen.getByRole('textbox')).toBeVisible();
    expect(screen.getByText('Some error')).toBeVisible();
  });

  describe('With state', () => {
    it('renders fine with ERROR state', () => {
      uiRender(<UiInput error="Some error" state="ERROR" />);

      expect(screen.getByRole('textbox')).toBeVisible();
      expect(screen.getByText('Some error')).toBeVisible();
    });

    it('renders fine with POSITIVE state', () => {
      uiRender(<UiInput error="Some error" state="POSITIVE" />);

      expect(screen.getByRole('textbox')).toBeVisible();
      expect(screen.getByText('Some error')).toBeVisible();
    });

    it('renders fine with NEGATIVE state', () => {
      uiRender(<UiInput error="Some error" state="NEGATIVE" />);

      expect(screen.getByRole('textbox')).toBeVisible();
      expect(screen.getByText('Some error')).toBeVisible();
    });

    it('renders fine with unrecognized state', () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //@ts-ignore
      uiRender(<UiInput error="Some error" state="XXXXXXX" />);

      expect(screen.getByRole('textbox')).toBeVisible();
      expect(screen.getByText('Some error')).toBeVisible();
    });
  });

  it('executes callback when there is change', () => {
    const onChange = jest.fn();

    uiRender(<UiInput onChange={onChange} />);

    const input = screen.getByRole('textbox');

    fireEvent.change(input, { target: { value: 'Some value' } });

    expect(screen.getByRole('textbox')).toHaveValue('Some value');
    expect(onChange).toHaveBeenCalledTimes(1);
    expect(onChange.mock.calls[0][0].target.value).toBe('Some value');
  });
});
