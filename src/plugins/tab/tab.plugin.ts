import * as path from 'path';
import { AdminUiExtension } from '@vendure/ui-devkit/compiler';
import { PluginCommonModule, Type, VendurePlugin } from '@vendure/core';

import { TAB_PLUGIN_OPTIONS } from './constants';
import { PluginInitOptions } from './types';
@VendurePlugin({
    imports: [PluginCommonModule],
    providers: [{ provide: TAB_PLUGIN_OPTIONS, useFactory: () => TabPlugin.options }],
    configuration: config => {
        // Plugin-specific configuration
        // such as custom fields, custom permissions,
        // strategies etc. can be configured here by
        // modifying the `config` object.
        return config;
    },
    compatibility: '^3.0.0',
})
export class TabPlugin {
    static options: PluginInitOptions;

    static init(options: PluginInitOptions): Type<TabPlugin> {
        this.options = options;
        return TabPlugin;
    }

    static ui: AdminUiExtension = {
        id: 'tab-ui',
        extensionPath: path.join(__dirname, 'ui'),
        routes: [{ route: 'tab', filePath: 'routes.ts' }],
        providers: ['providers.ts'],
    };
}
