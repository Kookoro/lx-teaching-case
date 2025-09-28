/*
 * @Author: qiulin qiulin@smm.cn
 * @Date: 2025-09-24 10:49:59
 * @LastEditors: qiulin qiulin@smm.cn
 * @LastEditTime: 2025-09-24 12:55:33
 * @FilePath: /lx-teaching-case/src/App.tsx
 * @Description: 
 */
import { useState } from 'react'
import './App.css'

import cong from './assets/cong.png'
import ming from './assets/ming.png'
import lin from './assets/lin.png'
import nan from './assets/nan.png'
import jian from './assets/jian.png'
import chen from './assets/chen.png'
import sen from './assets/sen.png'
import zhong from './assets/zhong.png'


function App() {

  const [index, setIndex] = useState(0)
  const qrCodeArr = [{
    name: '从',
    src: cong
  }, {
    name: '明',
    src: ming
  }, {
    name: '林',
    src: lin
  },{
    name: '男',
    src: nan
  },
  {
    name: '尖',
    src: jian
  },
  {
    name: '尘',
    src: chen
  },
  {
    name: '森',
    src: sen
  },
  {
    name: '众',
    src: zhong
  },
]

  return (
    <div>
      <p style={{fontSize:30}}>文字起源</p>
      <div style={{ fontSize: '100px', fontWeight: '600' }}>{`"${ qrCodeArr[index].name}"`}</div>
      <p>扫描二维码播放视频</p>
      <img src={qrCodeArr[index].src} style={{ width: '300px', height: '300px' }}></img>
     
      <div className='btn'>
        <div className='btn-item' onClick={() => {
          if(index > 0){
            setIndex(index - 1)
          }else{
            setIndex(qrCodeArr.length - 1)
          }
        }}>上一张</div>
        <div className='btn-item' onClick={() => {
          if(index < qrCodeArr.length - 1){
            setIndex(index + 1)
          }else{
            setIndex(0)
          }
        }}>下一张</div>
      </div>
    </div>
  )
}

export default App
