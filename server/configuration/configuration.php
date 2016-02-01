<?php

/**
 * Configuration file for set global variables.
 *
 * @version 1.0.0
 *
 * @internal
 */

/* @var string MySQL database name */
$gDbName = 'wmp';

/* @var string MySQL database user */
$gDbUser = 'wmp';

/* @var string MySQL database user */
$gDbPwd = 'wmp';

/* @var string  Server hosting */
$gDbHost = 'localhost';

/* @var string  Server hosting website */
$gDns = 'music.domain.com';

/* @var string  Path for music files */
$gFilesPath = '/home/user/music/';

//override with local values
if (is_file($_SERVER['DOCUMENT_ROOT'].'/server/configuration/local.php')) {
    include_once $_SERVER['DOCUMENT_ROOT'].'/server/configuration/local.php';
}
