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

(function() {
  'use strict';

  angular
    .module('horizon.app.core.images')
    .factory('horizon.app.core.images.actions.surprise.service', surpriseService);

  surpriseService.$inject = [
    '$q',
    'horizon.app.core.images.basePath',
    '$modal'
  ];

  /**
   * @ngDoc factory
   * @name horizon.app.core.images.actions.surpriseService
   * @Description A service to open a surprise modal.
   */
  function surpriseService(
    $q,
    basePath,
    $modal
  ) {

    var service = {
      allowed: allowed,
      perform: perform
    };

    return service;

    //////////////

    function allowed() {
      return $q.all([]);
    }

    function perform() {

      var localSpec = {
        backdrop: 'static',
        controller: 'SimpleModalController as ctrl',
        templateUrl: basePath + 'demo/surprise.html',
        resolve: {
          context: function context() { return true; }
        }
      };

      $modal.open(localSpec);
    }

  } // end of editService
})(); // end of IIFE

