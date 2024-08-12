import { fireEvent, render, screen } from '@testing-library/react';

const onClick = jest.fn();

describe(' Component', () => {
  it('should be able to render  component correctly', () => {
    render(<button onClick={onClick} data-testid="test_button" />);

    const containerElement = screen.getByTestId('test_button');
    fireEvent.click(containerElement);

    expect(onClick).toHaveBeenCalled();
    expect(onClick).toHaveBeenCalledTimes(1);
    expect(containerElement).toBeInTheDocument();
  });
});
