import Home from '@/views/Home'
export default [
	{path: '/', name: 'Home', component: Home},
	{path: '/Cesium', name: 'Cesium', component: () => import('@/views/Cesium')},
	{path: '/Leaflet', name: 'Leaflet', component: () => import('@/views/Leaflet')},
	{path: '/Echarsmap', name: 'Echarsmap', component: () => import('@/views/Echarsmap')},
	{path: '/Jsplumb', name: 'Jsplumb', component: () => import('@/views/Jsplumb')},
	{path: '/Threejs', name: 'Threejs', component: () => import('@/views/Threejs')},
]
