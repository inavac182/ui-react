import React from 'react';

import { screen, fireEvent } from '@testing-library/react';

import { uiRender } from '../../../__tests__/utils/render';
import { UiSwitch } from '../src';

describe('<UiSwitch />', () => {
  it('renders fine with label', () => {
    uiRender(<UiSwitch label="Select this" name="checkbox" />);

    expect(screen.getByRole('checkbox', { hidden: true })).toBeInTheDocument();
    expect(screen.getByRole('checkbox', { hidden: true })).toHaveStyleRule('visibility', 'hidden');
    expect(screen.getByText('Select this')).toBeVisible();
  });

  it('renders fine with label is at start', () => {
    uiRender(<UiSwitch label="Select this" name="checkbox" labelPosition="START" />);

    expect(screen.getByRole('checkbox', { hidden: true })).toBeInTheDocument();
    expect(screen.getByText('Select this')).toBeVisible();
  });

  it('renders fine when disabled', () => {
    uiRender(<UiSwitch label="Select this" name="checkbox" disabled />);

    expect(screen.getByRole('checkbox', { hidden: true })).toBeInTheDocument();
  });

  it('renders fine when using positive category', () => {
    uiRender(<UiSwitch name="checkbox" category="positive" />);

    expect(screen.getByRole('checkbox', { hidden: true })).toBeInTheDocument();
  });

  it('Is checked when label is clicked', () => {
    uiRender(<UiSwitch label="Select this" name="checkbox" />);

    expect(screen.getByRole('checkbox', { hidden: true })).not.toBeChecked();
    expect(screen.getByRole('checkbox', { hidden: true })).toBeInTheDocument();

    fireEvent.click(screen.getByText('Select this'));

    expect(screen.getByRole('checkbox', { hidden: true })).toBeChecked();
  });

  it('Executes callback when clicked', () => {
    const onChangeCB = jest.fn();
    uiRender(<UiSwitch label="Select this" name="checkbox" onChange={onChangeCB} />);

    expect(screen.getByRole('checkbox', { hidden: true })).toBeInTheDocument();

    fireEvent.click(screen.getByText('Select this'));

    expect(onChangeCB).toHaveBeenCalledTimes(1);
  });
});
