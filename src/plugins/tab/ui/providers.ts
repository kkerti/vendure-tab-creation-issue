import { registerPageTab } from '@vendure/admin-ui/core';
import { GreeterComponent } from './components/greeter.component';

export default [
    // registering this component to "order-list" does not work, the tab is rendered, but the GreeterComponent is not displayed properly
    // on full page reload to route "/admin/orders/greeter", the page is blank, even the "Order" heading disappears
    registerPageTab({
        location: 'order-list',
        tab: 'Greetings',
        route: 'greeter',
        component: GreeterComponent,
    }),

    // this works as expected on the product list
    registerPageTab({
        location: 'product-list',
        tab: 'Greetings',
        route: 'greeter',
        component: GreeterComponent,
    }),

    // this works too, I think this issue can be closed.
    // https://github.com/vendure-ecommerce/vendure/issues/2220
    registerPageTab({
        location: 'asset-list',
        tab: 'Greetings',
        route: 'greeter',
        component: GreeterComponent,
    })
];
