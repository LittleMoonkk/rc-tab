import styles from './index.less';
export default function NavBar(props) {
  const {
    navList,
    activeKey,
    setActivekey,
    onChange,
  } = props;

  const handleClick = (key) => {
    setActivekey(key);
    onChange && onChange(key);
  };

  return (
    <div className={styles.container}>
      {navList.map(nav => (
        <div
          key={nav.key}
          onClick={() => handleClick(nav.key)}
          className={styles.navItem}
        >
          {nav.tab}
        </div>
      ))}
    </div>
  )
};
