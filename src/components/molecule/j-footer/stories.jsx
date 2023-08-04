import JFooter from './index.jsx';
import JIcon from "../../atom/j-icon/index.jsx";

export default {
  title: 'Molecules/JFooter',
  component: JFooter,
  tags: ['autodocs'],
  argTypes: {
    year: { control: 'number', description: 'Copyright year' },
  },
  args: {
    year: 2023,
  }
}

export const Default = {}

export const FooterWithIcons = {
  render: (args) => (
    <JFooter year="2023">
      <JIcon name="gmail" />
      <JIcon name="twitter" />
      <JIcon name="linkedin" />
      <JIcon name="github" />
    </JFooter>
  )
}
