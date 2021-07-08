import { createElement, useRef } from 'rax';
import View from 'rax-view';
import ScrollView from 'rax-scrollview';


export default function Home() {

  const svRef = useRef(null);

  return (
    <View styel={{ width: '100vw', height: '100vw', position: 'relative' }}>
      <ScrollView
        ref={svRef}
        style={{ width: '100vw', height: '100vh' }}
      >
        {
          new Array(100).fill(0).map((value, index) => {
            return (
              <View key={`line-${index}`} style={{ width: '100%', height: '80rpx' }}>
                line-{index}
              </View>
            );
          })
        }
        <View style={{ position: 'absolute', right: 0, bottom: '100rpx', width: '200rpx', height: '80rpx', color: 'white', backgroundColor: 'blue' }} onClick={() => { svRef.current.scrollTo({ x: 0, y: 0 }); }}>
          To Top
        </View>
      </ScrollView>
    </View>
  );
}
