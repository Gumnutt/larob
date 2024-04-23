<?php
/**
 * @file
 * Drupal settings entry point.
 *
 * @see https://api.drupal.org/api/drupal/sites!default!default.settings.php/10
 */

$databases = [];
$config_directories = [];
$settings['hash_salt'] = 'qdHvA2pvxy3Iu8VzOp-bPkgLkSCzw1ahyRwZncICmecLVeYTUHMDr6o3WLrNgB5CQVI2GHuqww';
$settings['update_free_access'] = FALSE;
$settings['container_yamls'][] = $app_root . '/' . $site_path . '/services.yml';
$settings['file_scan_ignore_directories'] = [
  'node_modules',
  'bower_components',
];
$settings['config_sync_directory'] = '../config/sync';

// Include a generic Platform.sh settings file if remote.
$platformsh = new \Platformsh\ConfigReader\Config();
if ($platformsh->isValidPlatform()) {
  include_once $app_root . '/' . $site_path . '/platformsh.settings.php';
}

// Include a generic Lando file if local.
if (getenv('LANDO') == 'ON') {
  include_once $app_root . '/' . $site_path . '/lando.settings.php';
}

// Local settings. These come last so that they can override anything.
if (file_exists($app_root . '/' . $site_path . '/local.settings.php')) {
  include_once $app_root . '/' . $site_path . '/local.settings.php';
}
