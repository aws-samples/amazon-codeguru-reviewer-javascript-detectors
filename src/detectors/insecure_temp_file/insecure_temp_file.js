/*
 * Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * SPDX-License-Identifier: Apache-2.0
 */

// {fact rule=insecure-temp-file@v1.0 defects=1}
var fs = require('fs')
function insecureTempFileNoncompliant() {
    // Noncompliant: the global directory path is given for opening a file or creating a file the case can be vulnerable to injection attacks.
    var tmp_file = "/tmp/f"
    fs.readFile(tmp_file, 'utf8', function (err, data) {
       // ...
    })
}
// {/fact}

// {fact rule=insecure-temp-file@v1.0 defects=0}
var tmp = require('tmp')
function insecureTempFileCompliant() {
    // Compliant: tmp library to securely create or read a temporary files.
   var tmp_obj = tmp.fileSync()
   fs.readFileSync(tmp_obj, 'utf8')
}
// {/fact}