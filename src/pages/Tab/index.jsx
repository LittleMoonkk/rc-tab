import { useState } from 'react';
import NavBar from '../NavBar';
import styles from './index.less';

export default function Tab(props) {
  const [activeKey, setActiveKey] = useState('1');
  const { children, onChange } = props;
  const PaneProps = children.map(item => ({
    ...item.props,
    key: item.key,
  }));

  return (
    <div>
      <NavBar
        navList={PaneProps}
        activeKey={activeKey}
        setActivekey={setActiveKey}
        onChange={onChange}
      />
      { children.map(child => child.key === activeKey ? child : '') }
    </div>
  )
};
