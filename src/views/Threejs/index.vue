<template>
  <div ref="threejs"></div>
</template>

<script>
import * as THREE from 'three';
import {onMounted, ref} from 'vue'

export default {
  name: 'Threejs',
  setup() {
    const threejs = ref()

    onMounted(() => {
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(30, window.innerWidth / window.innerHeight, 0.1, 1000)
      const renderer = new THREE.WebGLRenderer()
      renderer.setSize(window.innerWidth, window.innerHeight)
      threejs.value.appendChild(renderer.domElement)
      const geometry = new THREE.BoxGeometry(1, 1, 1)
      const material = new THREE.MeshBasicMaterial({color: 0x0000ff})
      const cube = new THREE.Mesh(geometry, material)
      scene.add(cube)
      camera.position.z = 5

      function animate() {
        requestAnimationFrame(animate)
        cube.rotation.x += 0.02
        cube.rotation.y += 0.01
        renderer.render(scene, camera)
      }

      animate()
    })

    return {
      threejs
    }

  }
}
</script>

<style scoped>

</style>
