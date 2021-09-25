// import styles from './index.less';
import './index.less';
import ReactTransition from '@/component/ReactTransition';
import { useState } from 'react';
export default function IndexPage() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      {/* <div className="fade-enter">111</div> */}
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        切换
      </button>
      <ReactTransition name="fade" visible={visible}>
        {({ className, style }: any, ref: any) => {
          return (
            <div className={className} style={style}>
              111
            </div>
          );
        }}
      </ReactTransition>
    </div>
  );
}
