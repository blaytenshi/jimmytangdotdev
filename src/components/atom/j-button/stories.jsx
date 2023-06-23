import JButton from './index.jsx';

export default {
  title: "JButton",
};

export const Default = (args) => <JButton {...args} />

Default.args = {
  label: "Origin Story",
  capitalize: true,
}
