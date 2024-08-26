import GradientButton from './GradientButton';
import renderer from 'react-test-renderer';

describe('GradientButton Component', () => {
  it('renders correctly with a title and gradation colors', () => {
    const { root } = renderer.create(
      <GradientButton
        title="Test button"
        gradientBackgroundProps={{
          colors: ['blue', 'red'],
          start: { x: 0, y: 1 },
          end: { x: 0.8, y: 0 },
        }}
      />,
    );
    expect(root).toBeTruthy();
  });
});
