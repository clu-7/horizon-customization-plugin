# horizon-customization-plugin

============================
horizon-customization-plugin
============================

horizon-customization-plugin is an example that shows how to customize various
components in an Angular dashboard table. It uses the concept of the "registry" developed
in the Newton Release cycle.


Requirements
============

horizon-customization-plugin is intended to use only on systems running Horizon.
Images table is Angular by default (set to True in the ANGULAR_FEATURES dict in ``settings.py``)
and should be the case for this plugin to work.


How to test this package
========================

1. Git clone this repo to your local machine
2. Run "python setup.py sdist" in the folder
3. Run "./tools/with_venv.sh pip install horizon-customization-plugin/dist/..tar.gz" in horizon
4. Copy files in the enabled folder to ``openstack_dashboard/local/enabled``
5. Restart Apache or your Django test server
