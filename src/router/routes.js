import { Trans } from '@/plugins/Translation.js';

function load(path, component) {
	return () => import(/* webpackChunkName: "[request]" */ `@/${path}/${component}.vue`);
}

export default [
	{
		path: '/:lang',
		component: load('components/Common','Navigation'),
		beforeEnter: Trans.routeMiddleware,
		children: [
			{
				path: '',
				name: 'home',
				component: load('views', 'Home')
			},
			{
				path: 'about',
				name: 'about',
				component: load('views', 'About')
			},
			{
				path: '/callback',
				name: 'callback',
				component: load('views', 'Callback')
			},
			{
				path: 'work',
				name: 'work',
				component: load('views', 'Work')
			},
			{
				path: 'work/edit',
				name: 'edit',

				component: load('components/Work', 'Edit'),
				meta: {
					requiresAuth: true
				}
				// beforeEnter(to, from, next) {

				//   if (store.getters.user) {
				//     // console.log(store.state.user);
				//     // console.log(store.getters.user);

				//     next();
				//   } else {
				//     next('/login');
				//   }
				// }
			},
			{
				path: 'blogs',
				name: 'blogs',
				component: load('views', 'Blogs')
			},
			{
				path: 'blogs/new',
				name: 'new-blog',
				component: load('components/Blog', 'AddBlog'),
				meta: {
					requiresAuth: true
				}
			},
			{
				path: 'blogs/:id',
				name: 'blogs-post',
				component: load('components/Blog', 'BlogPost')
			},
			{
				path: 'blogs/:id/edit',
				name: 'blogs-post-edit',
				component: load('components/Blog', 'BlogPostEdit'),
				meta: {
					requiresAuth: true
				}
			},
			{
				path: 'user',
				name: 'user',
				component: load('views', 'User'),
				meta: {
					requiresAuth: true
				}
			},

			{
				path: 'admin',
				name: 'admin',
				component: load('views', 'Admin'),
				meta: {
					requiresAuth: true
				}
				// beforeEnter(to, from, next) {

				//   if (firebase.auth().currentUser) {
				//     // console.log(store.state.user);
				//     // console.log(store.getters.user);

				//     next();
				//   } else {
				//     next('/signup');
				//   }
				// }
			},
			{
				path: 'contact',
				name: 'contact',
				component: load('views', 'Contact')
			},

			{
				path: 'signup',
				name: 'signup',
				component: load('views', 'SignUp')
			},
			{
				path: 'login',
				name: 'login',
				component: load('views', 'Login')
			},
			{ path: '/404', component: load('components/Common', 'NotFound') },
			{ path: '*', redirect: '/404' }
		]
	},
	{
		path: '*',
		redirect(to) {
			return Trans.getUserSupportedLang();
		}
	}
];
