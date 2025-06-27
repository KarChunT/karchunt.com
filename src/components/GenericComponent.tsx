'use client';

interface GenericComponentProps {
  component: string;
  componentProps?: Record<string, any>;
}

const GenericComponent = ({
  component,
  componentProps = {},
}: GenericComponentProps) => {
  // if (component === 'test') {
  //   return <Test {...componentProps} />;
  // }
  // } else if (component === 'other') {
  //   // Replace with your actual import/component
  //   const OtherComponent = require('./OtherComponent').default;
  //   return <OtherComponent {...componentProps} />;
  // } else {
  //   return <div>Component not found</div>;
  // }
  return <div>Component not found</div>;
};

export default GenericComponent;
