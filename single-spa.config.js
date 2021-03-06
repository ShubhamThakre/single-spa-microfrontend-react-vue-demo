import { registerApplication, start} from 'single-spa'


registerApplication(
	'vue',
	()=>import('./src/vue/app.js'),
	()=>location.pathname === "/react" ? false : true
);

registerApplication(
	'react',
	()=>import('./src/react/index.js'),
	()=> location.pathname === "/vue" ? false : true
);



start();