/**
 * Copyright 2016 IBM Corp.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License. You may obtain
 * a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

(function () {
  'use strict';

  angular
    .module('horizon.app.core')
    .run(demoPlugin);

  demoPlugin.$inject = [
    'horizon.framework.conf.resource-type-registry.service',
    'horizon.app.core.images.basePath',
    'horizon.app.core.images.resourceType',
    'horizon.app.core.images.actions.surprise.service'
  ];

  function demoPlugin(registry, basePath, imageResourceType, surpriseService) {
    // registry details under: /horizon/static/framework/conf/resource-type-registry.service.js
    registry = registry.getResourceType(imageResourceType);
    console.log(registry);

    // add a new column
    var column = {
      id: 'size',
      priority: 2,
      template: '<a style="color:orange;">{$ item.size | bytes $}</a>'
    };
    registry.tableColumns.append(column);

    // add a new detail view
    registry.detailsViews.append({
      id: 'imageDemoDetailOverview',
      name: gettext('boo'),
      template: basePath + 'demo/detail.html'
    });

    // set a new summary drawer template
    registry.setSummaryTemplateUrl(basePath + 'demo/drawer.html');

    // add a new global action
    registry.globalActions
      .append({
        id: 'surpriseAction',
        service: surpriseService,
        template: {
          text: gettext('Surprise')
        }
      });

  }

})();

