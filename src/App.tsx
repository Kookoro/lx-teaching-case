/*
 * @Author: qiulin qiulin@smm.cn
 * @Date: 2025-09-24 10:49:59
 * @LastEditors: qiulin qiulin@smm.cn
 * @LastEditTime: 2025-09-24 12:55:33
 * @FilePath: /lx-teaching-case/src/App.tsx
 * @Description: 
 */
import './App.css'
import logo from './assets/qrcode.png'

function App() {

  return (
    <div>
      <p>扫描二维码播放视频</p>
      <img src={logo}></img>
    </div>
  )
}

export default App
