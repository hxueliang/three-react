import React from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import './App.css';

class App extends React.Component {
  render() {
    return <div className='App'></div>;
  }

  componentDidMount() {
    let innerWidth = window.innerWidth;
    let innerHeight = window.innerHeight;

    // 1.1 创建场景
    const scene = new THREE.Scene();

    // 1.2 创建相机
    const camera = new THREE.PerspectiveCamera(75, innerWidth / innerHeight, 0.1, 1000);
    camera.position.set(5, 5, 10);
    scene.add(camera);

    // 1.3 创建物体
    const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
    const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    scene.add(cube);

    // 1.4 创建渲染器
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(innerWidth, innerHeight);

    // 1.6 创建控制器
    let cantrols = null;
    function createControls() {
      cantrols = new OrbitControls(camera, renderer.domElement);
      cantrols.enableDamping = true;
      cantrols.dampingFactor = 0.05;
    }

    // 1.7 添加坐标轴辅助器
    const axesHelper = new THREE.AxesHelper(5);
    scene.add(axesHelper);

    // 1.8 挂载画布
    function createCanvas() {
      document.body.appendChild(renderer.domElement);
    }

    // 1.5 创建渲染函数
    function render() {
      cantrols && cantrols.update();
      renderer.render(scene, camera);
      requestAnimationFrame(render);
    };

    createControls();
    createCanvas();
    render();
  }
}

export default App;
