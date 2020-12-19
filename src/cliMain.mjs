// -*- coding: utf-8, tab-width: 2 -*-

import pdfForms from 'pdf-forms';
import safeSortedJson from 'safe-sortedjson';
import readDataFile from 'read-data-file';
import aMap from 'map-assoc-core';
import getOwn from 'getown';


function readAliases(path) {
  if (!path) { return; }
  if (path === '/dev/null') { return; }
  return readDataFile(path);
}


async function cliMain(argv) {
  const [srcDocPdf, formDataFile, fieldAliasesFile] = argv;
  // const srcBfn = srcDocPdf.replace(/\.pdf$/i,
  //   '').replace(/(\.|\-)(orig|original|empty|blank)$/, '$1');
  const srcDocForm = pdfForms.load(srcDocPdf);
  if (!formDataFile) {
    const fields = await srcDocForm.getFields();
    console.info(safeSortedJson(fields, null, 2));
    return;
  }
  const formDataDict = await readDataFile(formDataFile);
  const fieldAliasesDict = await readAliases(fieldAliasesFile);
  const formDataAliased = {};
  aMap(formDataDict, function guess(v, k) {
    formDataAliased[getOwn(fieldAliasesDict, k, k)] = v;
  });
  const filled = await srcDocForm.fillOut(formDataAliased);
  process.stdout.write(filled);
}



export default cliMain;
