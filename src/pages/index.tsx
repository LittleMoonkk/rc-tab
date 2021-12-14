import Tab from './Tab';
import styles from './index.less';

export default function IndexPage() {
  return (
    <div>
        <Tab>
            <div tab={1} key={1}>1</div>
            <div tab={2} key={2}>2</div>
            <div tab={3} key={3}>3</div>
        </Tab>
    </div>
  );
}
